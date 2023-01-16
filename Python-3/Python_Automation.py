# Must install 'schedule' if not already installed
# Run => pip3 install schedule
# Must install 'requests' and use a provided API via 'textbelt.com/text'
# Run => pip3 install requests
# Must install 'time' if not already installed
# Run => pip3 install time

# If you are using a seperate array of phone numbers 
# remove '#' on line below
# from credentials import mobile_number

import requests
import schedule
import time

def send_message():
    resp = requests.post('https://textbelt.com/text', {
        #If using array of numers change input(TEXT) field to  => mobile_number
        'phone': input('Input Mobile Number in 10 digit format (ex. 15551231234'), 
        'message': 'Hey, Good morning!',
        # 'textbelt' key below can be changed to API for use beyond 1 time per day
        'key': 'textbelt',
    })
    print(resp.json())

# Send at scheduled time
# schedule.every().day.at('06:00').do(send_message)

# Schedule repeating message
schedule.every(10).seconds.do(send_message)

while True:
    schedule.run_pending()
    time.sleep(1)