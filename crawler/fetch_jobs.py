


from bs4 import BeautifulSoup
import requests
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

# MongoDB Setup
client = MongoClient(os.getenv("DATABASE"))
db = client["test"]
jobs_collection = db["jobdata"]

# Predefined Job Types
job_types = [
    "IT/인터넷", "영업/고객상담", "마케팅/광고/홍보",
    "생산/제조", "서비스", "연구개발/설계", "경영/사무"
]

def crawl_careers_page(url):
    """Crawl the careers page for job listings."""
    response = requests.get(url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    # Extract job cards based on the structure
    job_cards = soup.select("div.card_wrap > ul.card_list > li.card_item")
    new_jobs = []

    for card in job_cards:
        # Extract job details
        title = card.select_one("h4.card_title").get_text(strip=True)
        onclick_attr = card.select_one("a.card_link")["onclick"]
        job_id = onclick_attr.split("'")[1]
        job_link = f"https://recruit.navercorp.com/rcrt/view.do?annoId={job_id}"

        # Check if the job link already exists in the database
        existing_job = jobs_collection.find_one({"url": job_link})
        if not existing_job:
            new_jobs.append({"url": job_link, "title": title})

    return new_jobs

