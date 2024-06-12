from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from bs4 import BeautifulSoup

app = FastAPI()

class JobPost(BaseModel):
    html_content: str

@app.post("/summarize/")
async def summarize_job_post(job_post: JobPost):
    soup = BeautifulSoup(job_post.html_content, 'html.parser')
    
    # Define selectors or tags that might commonly hold the required information
    summary = {
        "직무": "",
        "지원자격": "",
        "우대사항": "",
        "전형절차": "",
        "접수기간": "",
        "근무지": "",
        "기타사항": ""
    }
    
    # Example extraction logic
    # Modify according to actual HTML structures
    summary['직무'] = soup.find('div', class_='job-description').get_text(strip=True) if soup.find('div', class_='job-description') else ""
    summary['지원자격'] = soup.find('div', class_='qualifications').get_text(strip=True) if soup.find('div', class_='qualifications') else ""
    # Add similar extraction logic for other fields based on their respective HTML structures
    
    return summary
