# # main.py

# from fetch_jobs import crawl_careers_page  # Import the function
# from job_crawling import crawl_job_details  # Import the second step
# from pymongo import MongoClient
# import os
# from dotenv import load_dotenv

# load_dotenv()

# # MongoDB setup
# client = MongoClient(os.getenv("DATABASE"))
# db = client["test"]
# jobs_collection = db["jobdata"]

# def main():
#     careers_page_url = "https://recruit.navercorp.com/rcrt/list.do?sw="
    
#     # Step 1: Crawl careers page
#     new_jobs = crawl_careers_page(careers_page_url, jobs_collection)
#     print(f"Found {len(new_jobs)} new jobs.")

#     # Step 2: Process new jobs
#     for job in new_jobs:
#         crawl_job_details(job)

# if __name__ == "__main__":
#     main()

from fetch_jobs import NaverParser  # Import the Naver careers page parser
from job_crawling import LLM        # Import the LLM class for detailed crawling
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables

class DB:
    def __init__(self, database_url, db_name):
        # Set up MongoDB connection
        client = MongoClient(database_url)
        self.db = client[db_name]
        self.jobs_collection = self.db["jobdata"]

    def insert(self, job_data):
        # Insert or update job data in the database
        unique_identifier = {"url": job_data["url"]}
        self.jobs_collection.update_one(
            unique_identifier,
            {"$setOnInsert": job_data},
            upsert=True
        )
        print(f"Inserted/Updated job: {job_data['title']}")

class App:
    def __init__(self):
        self.parsers = []
        self.llm = None
        self.db = None

    def set_llm(self, llm):
        self.llm = llm

    def set_db(self, db):
        self.db = db

    def add_parser(self, parser):
        self.parsers.append(parser)

    def start(self):
        for parser in self.parsers:
            self.run(parser)

    def run(self, parser):
        # Step 1: Crawl careers page
        job_list = parser.list_parser(self.db.jobs_collection)
        print(f"Found {len(job_list)} new jobs from {parser.__class__.__name__}.")

        # Step 2: Crawl job details and insert into DB
        for job in job_list:
            job_data = parser.job_parser(job)
            llm_data = self.llm.run(job_data)
            self.db.insert(llm_data)

# Main function
if __name__ == "__main__":
    # Initialize LLM
    llm = LLM(api_key=os.getenv("GPTKEY"))

    # Initialize database
    database_url = os.getenv("DATABASE")
    db = DB(database_url, db_name="test")

    # Initialize app and add parsers
    app = App()
    app.set_llm(llm)
    app.set_db(db)
    app.add_parser(NaverParser())  # Add Naver careers page parser

    # Start the crawling process
    app.start()
