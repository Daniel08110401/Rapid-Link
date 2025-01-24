from langchain_openai import ChatOpenAI
from langchain_core.prompts import MessagesPlaceholder
from langchain import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from bs4 import BeautifulSoup
import requests

# LangChain LLM Setup
llm = ChatOpenAI(api_key=os.getenv("GPTKEY"))

# ChatGPT Prompt Template
job_template = """
너는 지금부터 채용 공고를 요약해주는 일을 할거야
내가 <input></input> 안에 채용 공고 본문을 입력해주면,
다음 양식에 맞춰서 공고 내용을 요약해줘
만약 양식에 해당하는 내용이 공고에 없다면, 공백으로 남겨둬

[양식]        
company: 
description:
title:
jobType:
deadline:
available:
location:
        
<input>
{description}
</input>
"""

template = PromptTemplate.from_template(job_template)
chain = template | llm | StrOutputParser()

def crawl_job_details(job):
    """Extract detailed job information using ChatGPT."""
    response = requests.get(job["url"])
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    # Extract job description from the page (example for demonstration)
    job_description = soup.get_text()

    # Process with ChatGPT
    result = chain.invoke({"description": job_description})
    job_data = {
        "company": "NAVER",
        "description": result["description"],
        "url": job["url"],
        "title": job["title"],
        "jobType": result.get("jobType", ""),
        "location": result.get("location", ""),
        "deadline": result.get("deadline", ""),
        "available": True,
        "user": None,
    }

    # Insert into the database
    unique_identifier = {"url": job["url"]}
    jobs_collection.update_one(
        unique_identifier,
        {"$setOnInsert": job_data},
        upsert=True
    )

    print(f"Inserted/Updated job: {job['title']}")
