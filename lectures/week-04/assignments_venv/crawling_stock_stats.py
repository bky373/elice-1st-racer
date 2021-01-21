import requests
import re
from bs4 import BeautifulSoup


def blank_removed(text):
    return text.replace('\n', '').replace('\t', '')


# 기업에 대한 정보를 크롤링하는 함수입니다.
def crawling(soup):
    # 1번
    stock = []

    trs = soup.find('table', class_='type_5').find('tbody').find_all('tr')[:-2]
    for tr in trs:
        tds = tr.find_all('td')

        company_name = tds[0].text.replace('*', '')  # 1번째: 기업명            
        cur_price = blank_removed(tds[1].text)  # 2번째: 현재가 
        diff = blank_removed(tds[2].text)  # 3번째: 전일비
        fluc_ratio = blank_removed(tds[3].text)  # 4번째: 등락률

        stock.append([company_name, cur_price, diff, fluc_ratio])

    print(stock)
    print()
    
    # 2번
    data = {}  # { key = 기업명 : value = 현재가 }
    p = re.compile('[+][\d]+.?\d{2}')  # 등락률 증가 확인을 위한 정규표현식

    for info in stock:
        fluc_ratio = info[3]

        if p.match(fluc_ratio):
            data[info[0]] = int(info[1].replace(',', ''))

    return data


def main():
    # 주어진 url을 크롤링하세요.
    custom_header = {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
    }

    url = "https://finance.naver.com/sise/sise_group_detail.nhn?type=upjong&no=235"
    req = requests.get(url, headers=custom_header)

    soup = BeautifulSoup(req.text, 'html.parser')

    data = crawling(soup)

    sorted_data = sorted(data.items(), key=lambda x: x[1])

    # 현재가가 오름차순이 되도록 data 딕셔너리를 출력하세요.
    print(sorted_data)


if __name__ == "__main__":
    main()
