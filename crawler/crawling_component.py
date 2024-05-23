# 크롤링 + 파싱 
# 크롤링 => url만 넣으면 html이 나오는 -> 통일
# 파싱 => 사이트 별로 다름

# 파싱용 함수를 분리
def naver(html):
    text = "공고 내용"
    return text

def shiftup(html):
    text = "공고 내용"
    return text

class Crawler:
    def __init__(self):
        pass        

    def run(self, url, parser):
        html = requests.get(url).text
        html = BeautifulSoup(html, 'html.parser')
        result = parser(html)
        return result


if __name__ == "__main__":
    crawler = Crawler()
    crawler.run("http://career.naver.com/adfasdf", naver)