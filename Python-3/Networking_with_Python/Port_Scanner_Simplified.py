import socket
import threading
from queue import Queue

target = '142.250.191.46'
queue = Queue()
open_ports = []

print('Scanning "{}" ... \n\n'.format(target))

def portscan(port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect((target, port))
        return True
    except:
        return False

def fill_queue(port_list):
    for port in port_list:
        queue.put(port)

def worker():
    while not queue.empty():
        port = queue.get()
        if portscan(port):
            print('Port {} is open! \n\n'.format(port))
            open_ports.append(port)
        else:
            print('Port {} is closed!'.format(port))

port_list = range(1, 1024)
fill_queue(port_list)

thread_list = []

for t in range(50):
    thread = threading.Thread(target=worker)
    thread_list.append(thread)

for thread in thread_list:
    thread.start()

for thread in thread_list:
    thread.join()
print('The port scan of "{}" has completed! \n\n'.format(target),'The open ports are: ', sorted(open_ports))
