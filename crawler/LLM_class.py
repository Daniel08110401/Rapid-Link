from langchain_openai import ChatOpenAI
from langchain import PromptTemplate
from langchain_core.prompts import MessagesPlaceholder
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from pymongo import MongoClient
from dotenv import load_dotenv
from bs4 import BeautifulSoup
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
raw_job_collection = db['rawjobdatas']

# Set up LangChain LLM
key = os.getenv('GPTKEY')
llm = ChatOpenAI(api_key=key)
template = PromptTemplate.from_template(job_template())
chain = template | llm | StrOutputParser()

# Fetch and process each document
for document in raw_job_collection.find():
    html_content = document['html_content']
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # kill all script and style elements
    for script in soup(["script", "style"]):
        script.extract()    # rip it out
    
    # Find the HTML elements containing the text you want to extract
    # For example, let's extract the text from all <p> tags
    paragraphs = soup.find_all('p')
    text = ""

    i = 1
    full_text = ""
    for p in paragraphs:
        # Append each paragraph's text to the accumulator string
        text = p.get_text()
        # print("text: ", text)
        full_text = full_text + text + "\n"
    
        
    # print(full_text)
    result = chain.invoke({"description": full_text})
    print(f"Processed result for URL {document['url']}:\n", result)
        
    break


    
    
    
    
