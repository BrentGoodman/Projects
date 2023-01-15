from email.message import EmailMessage
import ssl
import smtplib

email_sender = 'goodman.brent@gmail.com'
email_password = 'password'

email_receiver = 'goodman.brent@gmail.com'

subject = "Email Sender Project"
body = """
This is a python email sender program.
"""
em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['Subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(email_sender, email_password)
    smtp.sendmail(email_sender, email_receiver, em.as_string())