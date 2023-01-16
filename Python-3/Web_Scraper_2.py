import requests
from bs4 import BeautifulSoup

def print_title(r):
    print('WEBSITE HEADER: \n')

    for key, value in r.items(): 
        print('{} ==>> ({}) \n'.format(key, value))
    print('\n')

def webScraper():

    url = input('Enter URL including https:// here (ex. https://google.com): ')
    result = requests.get(url)

    if result.status_code == 200:
        print('\n', 'Website status "{}" => Website is live. \n'.format(result.status_code))
        print_title(result.headers)
        
        content_source = result.content
        soup = BeautifulSoup(content_source, 'lxml')
        
        option_one = input('Custom search or general (General or All): ') or 'All'

        if option_one == 'General':
            search = soup.find_all(
            input('Enter HTML field type (ex. h2, h1, title, p, etc..): ') or 
            ('title', 'h1', 'h2', 'h3', 'h4', 'span', 'p', 'a', 'li', 'ul', 'div'), 
            {'class': input('Enter HTML Class for better results or just leave blank: ') or ''
            })

            for s in search:
                print(s.getText(), print(' '))
        
        elif option_one == 'All':
            print(soup.prettify())

    else:
        print('Website not live or wrong URL')

webScraper()


