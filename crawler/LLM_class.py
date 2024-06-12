from langchain_openai import ChatOpenAI
from langchain import PromptTemplate
from langchain_core.prompts import MessagesPlaceholder
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def job_template():
    return """
        너는 지금부터 채용 공고를 요약해주는 일을 할거야
        내가 채용 공고를 주면 다음 양식에 맞춰서 공고 내용을 요약해줘
        만약 양식에 해당하는 내용이 공고에 없다면, 공백으로 남겨둬

        company: 
        description:
        title:
        jobType:
        deadline:
        available:
        location:
        {description}
    """

key = os.environ.get('GPTKEY')
llm = ChatOpenAI(api_key=key)
template = PromptTemplate.from_template(job_template())
chain = template | llm | StrOutputParser()
# description = html 내용 (크롤링한 내용)
result = chain.invoke({"description": description})

print(result)


# def job_template():
#     return """
#         너는 지금부터 채용 공고를 요약해주는 일을 할거야
#         내가 채용 공고를 주면 다음 양식에 맞춰서 공고 내용을 요약해줘
#         만약 양식에 해당하는 내용이 공고에 없다면, 공백으로 남겨둬

#         company: 
#         description:
#         title:
#         jobType:
#         deadline:
#         available:
#         location:
#         {description}
#     """

# # Set up MongoDB connection
# dataBase = os.getenv('DATABASE')
# if dataBase is None:
#     raise EnvironmentError("DATABASE environment variable not set.")

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
#     html_content = document['html_content']  # Assuming 'html_content' field holds the HTML
#     result = chain.invoke({"description": html_content})
#     print(f"Processed result for URL {document['url']}:\n", result)
