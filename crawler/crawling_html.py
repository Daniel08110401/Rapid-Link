from bs4 import BeautifulSoup
import requests
from pymongo import MongoClient
from dotenv import load_dotenv
import os
import json

load_dotenv()  # Ensure this is at the beginning to load .env before any env var usage

class HtmlCrawler:
    def __init__(self, jobs_collection, raw_job_collection):
        self.jobs_collection = jobs_collection
        self.raw_job_collection = raw_job_collection  # Properly distinguishing the collections

    def url_exists(self, url):
        """ Check if the URL already exists in the database. """
        return self.jobs_collection.count_documents({'url': url}) > 0

    def fetch_html(self, url):
        """ Fetch HTML content for a given URL. """
        try:
            response = requests.get(url)
            response.raise_for_status()  # Raises HTTPError for bad responses
            return response.text
        except requests.RequestException as e:
            print(f"Failed to retrieve {url}: {str(e)}")
            return None

    def run(self, url):
        """ Run the crawler for a given URL if not already in the DB. """
        if not self.url_exists(url):
            html_content = self.fetch_html(url)
            if html_content:
                raw_job_data = {
                    "url": url,
                    "html_content": html_content
                }
                self.save_to_db(raw_job_data)
        else:
            print(f"URL already exists in the database and was skipped: {url}")

    def save_to_db(self, raw_job_data):
        """ Save the new job data to the database. """
        try:
            result = self.raw_job_collection.update_one(
                {'url': raw_job_data['url']},
                {'$setOnInsert': raw_job_data},
                upsert=True
            )
            if result.upserted_id:
                print("Inserted a new job:", raw_job_data['url'])
            else:
                print("No new data inserted.")
        except Exception as e:
            print(f"Failed to save data to database: {str(e)}")

if __name__ == "__main__":
    dataBase = os.getenv('DATABASE')
    if dataBase is None:
        raise EnvironmentError("DATABASE environment variable not set.")

    client = MongoClient(dataBase, tlsAllowInvalidCertificates=True)
    db = client['test']
    jobs_collection = db['jobs']
    raw_job_collection = db['rawjobdatas']

    try:
        with open('job_urls.json', 'r') as file:
            urls = json.load(file)
    except FileNotFoundError:
        raise Exception("job_urls.json file not found.")
    except json.JSONDecodeError:
        raise Exception("Error decoding job_urls.json. Ensure the file is in proper JSON format.")

    html_crawler = HtmlCrawler(jobs_collection, raw_job_collection)
    for url in urls:
        html_crawler.run(url)
