# Install 'requests' if not already installed
# Run => pip3 install requests
# Install 'beautifulsoup4' if not already installed
# Run => pip3 install beautifulsoup4

import requests
from bs4 import BeautifulSoup

# Prefilled Function for interactive input

def webScraper():
    url = input('Enter URL including https:// here (ex. https://google.com): ')
    r = requests.get(url)
    soup = BeautifulSoup (r.content, 'lxml')
    search = soup.find_all(
        input('Enter HTML field type (ex. h2, h1, title, p, etc..): '), {
            'class': input('Enter HTML Class for better results or just leave blank: ')
            })
    for s in search:
        print(s)
webScraper()

# Prefilled Function to for preview

import requests
from bs4 import BeautifulSoup

def webScraper():
    url = 'https://brentgoodman.github.io/resume'
    r = requests.get(url)
    soup = BeautifulSoup (r.content, 'lxml')
    search = soup.find_all(('h1', 'h2', 'h3', 'p', 'span'), )
    for s in search:
      print(s.getText(), print(''))
webScraper()



