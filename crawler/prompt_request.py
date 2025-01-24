# from langchain_openai import ChatOpenAI
# from langchain import PromptTemplate
# from langchain_core.prompts import MessagesPlaceholder
# from langchain_core.prompts import ChatPromptTemplate
# from langchain_core.output_parsers import StrOutputParser
# from pymongo import MongoClient
# from dotenv import load_dotenv
# from bs4 import BeautifulSoup
# import os

# load_dotenv()

# def job_template():
#     return """
#         너는 지금부터 채용 공고를 요약해주는 일을 할거야
#         내가 <input></input> 안에 채용 공고 본문을 입력해주면,
#         다음 양식에 맞춰서 공고 내용을 요약해줘
#         만약 양식에 해당하는 내용이 공고에 없다면, 공백으로 남겨둬

#         [양식]        
#         company: 
#         description:
#         title:
#         jobType:
#         deadline:
#         available:
#         location:
        
#         <input>
#         {description}
#         </input>
#     """

# # Set up MongoDB connection
# dataBase = os.getenv('DATABASE')
# if dataBase is None:
#     raise EnvironmentError("DATABASE environment variable not set")

# client = MongoClient(dataBase, tlsAllowInvalidCertificates=True)
# db = client['test']
# raw_job_collection = db['rawjobdatas']

# # Set up LangChain LLM
# key = os.getenv('GPTKEY')
# llm = ChatOpenAI(api_key=key)
# template = PromptTemplate.from_template(job_template())
# chain = template | llm | StrOutputParser()

# # Fetch and process each document
# for document in raw_job_collection.find():
#     html_content = document['html_content']
#     soup = BeautifulSoup(html_content, 'html.parser')
    
#     # kill all script and style elements
#     for script in soup(["script", "style"]):
#         script.extract()    # rip it out
    
#     # Find the HTML elements containing the text you want to extract
#     # For example, let's extract the text from all <p> tags
#     paragraphs = soup.find_all('p')
#     text = ""

#     i = 1
#     full_text = ""
#     for p in paragraphs:
#         # Append each paragraph's text to the accumulator string
#         text = p.get_text()
#         # print("text: ", text)
#         full_text = full_text + text + "\n"
    
        
#     # print(full_text)
#     result = chain.invoke({"description": full_text})
#     print(f"Processed result for URL {document['url']}:\n", result)
        
#     break


from langchain_openai import ChatOpenAI
from langchain import PromptTemplate
from langchain_core.prompts import MessagesPlaceholder
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from pymongo import MongoClient
from dotenv import load_dotenv
from bs4 import BeautifulSoup
import requests
import os

load_dotenv()

def job_template():
    return """
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

# Set up MongoDB connection
dataBase = os.getenv('DATABASE')
if dataBase is None:
    raise EnvironmentError("DATABASE environment variable not set")

client = MongoClient(dataBase, tlsAllowInvalidCertificates=True)
db = client['test']
job_collection = db['jobdatas']  # Processed jobs
raw_job_collection = db['rawjobdatas']  # Raw HTML jobs

# Set up LangChain LLM
key = os.getenv('GPTKEY')
llm = ChatOpenAI(api_key=key)
template = PromptTemplate.from_template(job_template())
chain = template | llm | StrOutputParser()

# Crawl the Naver careers page
def crawl_career_page(url):
    response = requests.get(url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract job links (adjust selectors based on Naver Careers page structure)
    job_links = []
    for job_link in soup.select('a.job_title_link'):  # Example selector
        job_links.append(job_link['href'])
    
    return job_links

# Process job details
def process_job_details(job_url):
    response = requests.get(job_url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract relevant text (e.g., job description, requirements, etc.)
    for script in soup(["script", "style"]):
        script.extract()  # Remove unwanted elements
    
    paragraphs = soup.find_all('p')
    full_text = "\n".join(p.get_text() for p in paragraphs)

    # Process with ChatGPT API
    result = chain.invoke({"description": full_text})
    return result

# Main function
def main():
    naver_career_page = "https://recruit.navercorp.com/rcrt/list.do?sw="
    job_links = crawl_career_page(naver_career_page)

    for job_link in job_links:
        # Check if job already exists
        if job_collection.find_one({"url": job_link}):
            print(f"Job {job_link} already processed.")
            continue
        
        # Process new job
        try:
            job_data = process_job_details(job_link)
            print(f"Processed job data for {job_link}:\n", job_data)

            # Store job in the database
            job_collection.insert_one({
                "url": job_link,
                "job_data": job_data,
                "processed_at": datetime.now()
            })

        except Exception as e:
            print(f"Failed to process job {job_link}: {e}")

if __name__ == "__main__":
    main()
