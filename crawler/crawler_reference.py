class NaverParser:
    def __init__(self):
        ...
    
    def list_parser():
        # ...
        return job_list # [{url: ...}]
    
    def job_parser(url):
        return {
            name: "",
            position: ""
        }

class KakaoParser:
    ...

class LLM:
    ...

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
        job_list = parser.list_parser() # url crawling
        for job in job_list:
            job_data = parser.job_parser(job) # html/text parsing
            llm_data = self.llm.run(job_data) # data schema에 맞게 parsing
            db.insert(llm_data)

# main.py 
llm = LLM()
db = DB()
app = App()
app.set_llm(llm)
app.add_parser(NaverParser())
app.add_parser(KakaoParser())
app.start()