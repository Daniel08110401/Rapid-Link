
def naver_parser(soup):
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

    job_data = {
        "company": company,
        "description": full_description,
        "url": soup.base_url,
        "title": title,
        "jobType": jobType,
        "location": "South Korea",
        "deadline": deadline,
        "available": True
    }
    return job_data