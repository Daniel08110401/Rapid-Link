from bs4 import BeautifulSoup
import requests
from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Import parser functions
from parsers.naver_parser import naver_parser
from parsers.shiftup_parser import shiftup_parer

load_dotenv()


# 반복작업이고 crawler 코드를 런 할때만 필요 하기에 if __name__ == "__main__"에서 실행될때만 
# MongoDB setup
# dataBase = os.environ.get('DATABASE')
# client = MongoClient(dataBase, tlsAllowInvalidCertificates=True)
# db = client['test']
# jobs_collection = db['jobs']

class Crawler:
    def __init__(self, db_collection):
        self.jobs_collection = db_collection

    def run(self, url, parser):
        html = requests.get(url).text
        soup = BeautifulSoup(html, 'html.parser')
        soup.base_url = url  # Storing the URL in the soup object for parsers to access
        job_data = parser(soup)
        self.save_to_db(job_data, url)

    def save_to_db(self, job_data, url):
        unique_identifier = {'url': url}
        result = self.jobs_collection.update_one(
            unique_identifier,
            {'$setOnInsert': job_data},
            upsert=True
        )
        if result.upserted_id:
            print("Inserted a new job:", job_data)
        else:
            print("Job already exists. No new data inserted.")

if __name__ == "__main__":
    # MongoDB setup
    dataBase = os.environ.get('DATABASE')
    client = MongoClient(dataBase, tlsAllowInvalidCertificates=True)
    db = client['test']
    jobs_collection = db['jobs']
    crawler = Crawler(jobs_collection)
    crawler.run("https://careers.naver.com/job/detail/30002124", naver_parser)

