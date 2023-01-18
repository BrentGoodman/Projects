# Prefilled Function for portfolio preview

import requests
from bs4 import BeautifulSoup
import time

def print_title(x):
    print('WEBSITE HEADER: \n')

    for key, value in x.items(): 
        print('{} ==>> ({}) \n'.format(key, value))
    print('\n')

def webScraper():
    url = 'https://brentgoodman.github.io/resume'
    r = requests.get(url)

    if r.status_code == 200:
        print('\n', 'Website status "{}" => Website is live. \n'.format(r.status_code))
        time.sleep(2)
        print('\n', 'Website Scraping "{}" '.format(url), '\n')
        print_title(r.headers)
        time.sleep(3)
        print('\n', 'WEBSITE HEADER SCRAPED', '\n')
        time.sleep(2)
        print('...', end='')
        time.sleep(1.5)
        print('...', end='')
        time.sleep(1)
        print('...', end='')
        time.sleep(0.5)
        print('...', end='')
        time.sleep(0.25)
        print('...', end='')

    soup = BeautifulSoup (r.content, 'lxml')
    search = soup.find_all(('title', 'h1', 'h2', 'h3', 'h4', 'span', 'p', 'a', 'li', 'ul', 'div'), )
    for s in search:
      print(s.prettify())

    time.sleep(6.5)
    print('\n', 'WEBSITE CONTENT SCRAPED', '\n')
    time.sleep(3)
    print('\n', 'OR MAYBE, MORE PRECISE DATA....', '\n')
    time.sleep(3)
    print('\n', 'Like the HTML <p> Attribute with a Specific <class="">', '\n')
    time.sleep(3)
    print('...', end='')
    time.sleep(2)
    print('...', end='')
    time.sleep(2)
    print('...', end='')
        
    p_search = soup.find_all(('p'), {'class': 'text-muted'})
    for p in p_search:
        print(p.prettify())
        
    time.sleep(3)
    print('\n', 'The <p> Attribute Scraped', '\n')
    time.sleep(3)
    print('\n', 'OR MAYBE, EVEN MORE PRECISE DATA....', '\n')
    time.sleep(3)
    print('\n', 'Like just the TEXT of the <p> Attribute with a Specific <class="">', '\n')
    time.sleep(4)
    print('...', end='')
    time.sleep(2)
    print('...', end='')
    time.sleep(2)
    print('...', '\n')
        
    p_search = soup.find_all(('p'), {'class': 'text-muted'})
    for p in p_search:
        print(p.getText(), '\n')
    
    time.sleep(3)
    print('\n', 'The Text of <p> Attribute with <class="text-muted"> Scraped', '\n')
    
    time.sleep(4)
    print('...', end='')
    time.sleep(1)
    print('...', end='')
    time.sleep(1)
    print('...', end='')
    time.sleep(1)
    print('...', '\n')

    print('THE DATA POSSIBILITIES ARE ENDLESS... \n\n THE END')

webScraper()