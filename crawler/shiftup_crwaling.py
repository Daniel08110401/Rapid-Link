from bs4 import BeautifulSoup
import requests
from pymongo import MongoClient

# MongoDB setup
client = MongoClient('mongodb+srv://leeseungho453:Summerbird12@rapidlinkapi.1pjznaa.mongodb.net/?retryWrites=true&w=majority&appName=rapidlinkapi',
                     tlsAllowInvalidCertificates=True)
db = client['test'] 
jobs_collection = db['jobs']

# Setup
url = "https://shiftup.career.greetinghr.com/o/69851"
html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')

# Extracting main job information
description_divs = soup.findAll('div', class_='sc-33d159f0-4 jgEEAz')
sub_info_divs = soup.findAll('div', class_='sc-33d159f0-5 jxcDKJ')

## Job detail extraction ##
## ===================== ##
job_details = {}
title = ""

if description_divs:
    for div in description_divs:
        title_tag = div.find('span', class_='Textstyled__Text-sc-55g6e4-0')
        title = title_tag.get_text(strip=True)

        # Process each div separately since divs contain structured content
        for section in div.find_all('div', recursive=False):
            h2 = section.find('h2')
            if h2:
                section_title = h2.get_text(strip=True)
                content = []
                next_element = h2.find_next_sibling()
                while next_element and next_element.name != 'h2':
                    if next_element.name == 'p':
                        content.append(next_element.get_text(strip=True))
                    next_element = next_element.find_next_sibling()
                job_details[section_title] = ' '.join(content)
else:
    print("No job description found.")

## Extracting sub-information ##
## ========================== ##
job_info = {}
if sub_info_divs:
    for div in sub_info_divs:
        rows = div.find_all('div', class_='Flex__FlexRow-sc-uu75bp-0')
        for row in rows:
            key = row.find('span', class_='Textstyled__Text-sc-55g6e4-0').get_text(strip=True)
            value = row.find('span', class_='Textstyled__Text-sc-55g6e4-0', type='item').get_text(strip=True)
            job_info[key] = value
else:
    print("No sub-information found.")

# Prepare the job_data
job_data = {
    "company": "Shift Up",
    "description": job_details.get('담당 업무', '') + ' ' + job_details.get('자격 요건', '') + ' ' + job_details.get('우대사항', '') + ' ' + ' '.join([f"{k}: {v}" for k, v in job_info.items()]),
    "url": url,
    "title": title,
    "jobType": job_info.get('직군', 'General'),  # Using 직군 from job_info or a default
    "location": job_info.get('근무지', 'South Korea'),
    "deadline": "2024-12-31",  # Placeholder or extract if available
    "available": True,
    "user": None  # Replace with ObjectId if needed
}

# print(job_data)

# unique identifier using url
unique_identifier = {'url': url}

# Update the database using $setOnInsert with upsert=True
result = jobs_collection.update_one(
    unique_identifier,
    {'$setOnInsert': job_data},
    upsert=True
)

# Check the result of the update
if result.upserted_id:
    print("Inserted a new job:", job_data)
else:
    print("Job already exists. No new data inserted.")
