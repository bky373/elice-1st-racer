import requests
import re
from bs4 import BeautifulSoup


def set_stats(x, y, z):
    return {'확진자': to_int(x), '사망자': to_int(y), '완치': to_int(z)}


def to_int(v):
    if v == ' ' or v == '' or v == 'N/A': return 'N/A'
    return int(v.replace(',', ''))


def select_nth_td(tr, i):
    return tr.select_one(f'td:nth-child({i})')


def crawling(soup):
    data = {}

    # crawling world statistics
    world_stats = soup.find_all('div', class_='maincounter-number')
    for i in range(3):
        world_stats[i] = world_stats[i].text
    data['World'] = set_stats(world_stats[0], world_stats[1], world_stats[2])

    # crawling each country's statistics
    trs = soup.find('table', id='main_table_countries_today').find('tbody').find_all('tr')
    for tr in trs:
        a = tr.find('a', class_='mt_a')
        if a is not None:
            country = a.text  # 국가명
            total_cases = select_nth_td(tr, 3).text  # 확진자
            total_deaths = select_nth_td(tr, 5).text  # 사망자
            total_recovered = select_nth_td(tr, 7).text  # 완치

            data[country] = set_stats(total_cases, total_deaths, total_recovered)

    return data


def main():
    custom_header = {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
    }

    url = "https://www.worldometers.info/coronavirus/"
    req = requests.get(url, headers=custom_header)

    soup = BeautifulSoup(req.text, 'html.parser')

    data = crawling(soup)

    for country, stats in data.items():
        print(country, stats)


if __name__ == "__main__":
    main()
