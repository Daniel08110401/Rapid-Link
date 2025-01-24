# main.py

from fetch_jobs import crawl_careers_page  # Import the function
from job_crawling import crawl_job_details  # Import the second step
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB setup
client = MongoClient(os.getenv("DATABASE"))
db = client["test"]
jobs_collection = db["jobdata"]

def main():
    careers_page_url = "https://recruit.navercorp.com/rcrt/list.do?sw="
    
    # Step 1: Crawl careers page
    new_jobs = crawl_careers_page(careers_page_url, jobs_collection)
    print(f"Found {len(new_jobs)} new jobs.")

    # Step 2: Process new jobs
    for job in new_jobs:
        crawl_job_details(job)

if __name__ == "__main__":
    main()
