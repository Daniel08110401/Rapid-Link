from bs4 import BeautifulSoup
import requests
from pymongo import MongoClient

# MongoDB pipsetup
# Setup MongoDB connection with disabled SSL verification for testing purposes
client = MongoClient('mongodb+srv://leeseungho453:Summerbird12@rapidlinkapi.1pjznaa.mongodb.net/?retryWrites=true&w=majority&appName=rapidlinkapi',
                     tlsAllowInvalidCertificates=True)
db = client['test']  
jobs_collection = db['jobs']

# URL setup
url = "https://recruit.navercloudcorp.com/rcrt/view.do?annoId=30002087&lang=ko"
html = requests.get(url).text

# Parse the HTML
soup = BeautifulSoup(html, 'html.parser')

## Extract job details ##
## =================== ##
job_title_div = soup.find('div', class_='card_title_box')
job_detail_div = soup.find('div', class_='detail_wrap')

if job_title_div:
    title = job_title_div.find('h4', class_='card_title').get_text(strip=True)
    details = job_title_div.find('dl', class_='card_info').find_all('dd', class_='info_text')
    details_text = [detail.get_text(strip=True) for detail in details]
    
    company = details_text[0]
    jobType = details_text[1]
    deadline = details_text[5]


if job_detail_div:
    paragraphs = job_detail_div.find_all('p')
    full_description = ' '.join([p.get_text(strip=True) for p in paragraphs])
    
    # Extract locaiton
    # location_text = None
    # for p in paragraphs:
    #     if '[근무지]' in p.get_text():
    #         # Assuming the location information follows in the next <p> tag
    #         next_p = p.find_next('p')
    #         if next_p:
    #             location_text = next_p.get_text(strip=True)
    #             break
    

# Prepare the job_data dictionary
job_data = {
    "company": company,  # Static example, adjust as needed
    "description": full_description,
    "url": url,
    "title": title,
    "jobType": jobType,  # ObjectId should be set here if you have predefined types
    "location": "South Korea",
    "deadline": deadline,
    "available": True,  # Assuming the job is available if it's listed
    "user": None  # ObjectId should be set here if you have a specific user reference
}


## Checking for redundant job information ##
## ====================================== ##

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
