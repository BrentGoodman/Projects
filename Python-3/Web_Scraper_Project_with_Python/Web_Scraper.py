# Install 'requests' if not already installed
# Run => pip3 install requests
# Install 'beautifulsoup4' if not already installed
# Run => pip3 install beautifulsoup4

import requests
from bs4 import BeautifulSoup

def print_title(r):
    print('WEBSITE HEADER: \n')
    for key, value in r.items(): 
        print('{} ==>> ({}) \n'.format(key, value))
    print('\n')

def webScraper():
    url = input('Enter URL including https:// here (ex. https://google.com): ') or 'google.com'
    result = requests.get(url)
    if result.status_code == 200:
        print('\n', 'Website status "{}" => Website is live. \n'.format(result.status_code))
        print_title(result.headers)
        soup = BeautifulSoup (result.content, 'lxml')
        search = soup.find_all(
          input('Enter HTML field type (ex. h2, h1, title, p, etc..): ') or 
          ('title', 'h1', 'h2', 'h3', 'h4', 'span', 'p', 'a', 'li', 'ul', 'div'), 
          {'class': input('Enter HTML Class for better results or just leave blank: ') or ''
          })
        for s in search:
            print(s.getText(), print(''))
webScraper()









