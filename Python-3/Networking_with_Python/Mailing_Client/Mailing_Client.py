import smtplib
from email import encoders
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart

server = smtplib.SMTP('smtp.world4you.com', 25)

server.ehlo()

with open('password.txt', 'r') as f:
    password = f.read()

server.login('goodman.brent@gmail.com', password)

msg = MIMEMultipart()
msg['From'] = 'Brent Goodman'
msg['To'] = 'goodman.brent@gmail.com'
msg['Subject'] = 'Just a Test'

with open('message.txt', 'r') as f:
    message = f.read()

msg.attach(MIMEText(message, 'plain'))

filename = 'coding.jpg'
attachment = open(filename, 'rb')

p = MIMEBase('application', 'octet-stream')
p.set_payload(attachment.read())

encoders.encode_base64(p)
p.add_header('Content-Disposition', f'attachment; filename={filename}')
msg.attach(p)

text = msg.as_string()
server.sendmail('goodman.brent@gmail.com', 'goodman.brent@gmail.com', text)