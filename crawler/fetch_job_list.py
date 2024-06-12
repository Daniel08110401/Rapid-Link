# import requests
# from bs4 import BeautifulSoup
# import json

# # fetching urls without any filtering
# def fetch_job_urls(base_url):
#     response = requests.get(base_url)
#     soup = BeautifulSoup(response.content, 'html.parser')
#     job_links = soup.find_all('a', class_='card_link')
    
#     urls = []
#     for link in job_links:
#         onclick_attr = link.get('onclick')
#         if onclick_attr:
#             job_id = onclick_attr.split("'")[1]
#             job_url = f"https://careers.naver.com/job/detail/{job_id}"
#             urls.append(job_url)
    
#     return urls

# if __name__ == "__main__":
#     # currently using naver careers
#     base_url = "https://recruit.navercorp.com/rcrt/list.do?subJobCdArr=1010001%2C1010002%2C1010003%2C1010004%2C1010005%2C1010006%2C1010007%2C1010008%2C1010020%2C1020001%2C1030001%2C1030002%2C1040001%2C1050001%2C1050002%2C1060001&sysCompanyCdArr=&empTypeCdArr=&entTypeCdArr=&workAreaCdArr=&sw=&subJobCdData=1010001&subJobCdData=1010002&subJobCdData=1010003&subJobCdData=1010004&subJobCdData=1010005&subJobCdData=1010006&subJobCdData=1010007&subJobCdData=1010008&subJobCdData=1010020&subJobCdData=1020001&subJobCdData=1030001&subJobCdData=1030002&subJobCdData=1040001&subJobCdData=1050001&subJobCdData=1050002&subJobCdData=1060001#n"
#     #base_url = "https://jobs.apple.com/ko-kr/search?location=korea-republic-of-KOR"
#     urls = fetch_job_urls(base_url)
#     # Save the fetched URLs to a JSON file
#     with open('job_urls.json', 'w') as f:
#         json.dump(urls, f)


import requests
from bs4 import BeautifulSoup
import json

def fetch_job_urls(base_url):
    response = requests.get(base_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    job_links = soup.find_all('a', class_='card_link')
    
    urls = []
    for link in job_links:
        onclick_attr = link.get('onclick')
        if onclick_attr:
            job_id = onclick_attr.split("'")[1]
            job_url = f"https://recruit.navercorp.com/rcrt/view.do?annoId={job_id}&sw=&subJobCdArr=1010001%2C1010002%2C1010003%2C1010004%2C1010005%2C1010006%2C1010007%2C1010008%2C1010020%2C1020001%2C1030001%2C1030002%2C1040001%2C1050001%2C1050002%2C1060001&sysCompanyCdArr=&empTypeCdArr=&entTypeCdArr=&workAreaCdArr="
            urls.append(job_url)
    
    return urls

if __name__ == "__main__":
    # Currently using Naver careers
    base_url = "https://recruit.navercorp.com/rcrt/list.do?subJobCdArr=1010001%2C1010002%2C1010003%2C1010004%2C1010005%2C1010006%2C1010007%2C1010008%2C1010020%2C1020001%2C1030001%2C1030002%2C1040001%2C1050001%2C1050002%2C1060001&sysCompanyCdArr=&empTypeCdArr=&entTypeCdArr=&workAreaCdArr=&sw=&subJobCdData=1010001&subJobCdData=1010002&subJobCdData=1010003&subJobCdData=1010004&subJobCdData=1010005&subJobCdData=1010006&subJobCdData=1010007&subJobCdData=1010008&subJobCdData=1010020&subJobCdData=1020001&subJobCdData=1030001&subJobCdData=1030002&subJobCdData=1040001&subJobCdData=1050001&subJobCdData=1050002&subJobCdData=1060001#n"
    urls = fetch_job_urls(base_url)
    # Save the fetched URLs to a JSON file
    with open('job_urls.json', 'w') as f:
        json.dump(urls, f)
