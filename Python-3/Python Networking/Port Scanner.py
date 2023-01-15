from queue import Queue
import socket
import threading

# Use code below instead of input for pre-defined target IP Address or Domain
# target = '10.0.0.1'  # target = 'https://www.fakewebsite.com
target = input('IP Address or Domain Name: ')
queue = Queue()
open_ports = []

def portscan(port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect((target, port))
        return True
    except:
        return False

def get_ports(mode):
    if mode == 1:
        for port in range(1, 1024):
            queue.put(port)
    elif mode == 2:
        for port in range(1, 49152):
            queue.put(port)
    elif mode == 3:
        ports = [20, 21, 22, 23, 25, 53, 80, 110, 443]
        for port in ports:
            queue.put(port)
    elif mode == 4:
        ports = input("Enter your ports (seperate by blank):")
        ports = ports.split()
        ports = list(map(int, ports))
        for port in ports:
            queue.put(port)

def worker():
    while not queue.empty():
        port = queue.get()
        if portscan(port):
            print("Port {} is open!".format(port))
            open_ports.append(port)

def run_scanner(threads, mode):

    get_ports(mode)

    thread_list = []

    for t in range(threads):
        thread = threading.Thread(target=worker)
        thread_list.append(thread)

    for thread in thread_list:
        thread.start()

    for thread in thread_list:
        thread.join()

    print("Open ports are:", open_ports)

thread = input('# of threads to run from 50-100 in increments of 10: ')
method = input('Select Port Scan mode 1, 2, 3, or 4 (1 = Standard Ports 1 - 1,024, 2 = Exnteded Ports 1 - 49,152, 3 = Common Ports, 4 = Custom Ports): ')
run_scanner(int(thread), int(method))


        # THIS IS THE SLOW METHOD FOR EDUCATIONAL UNDERSTANDING

        #for port in range(1, 1024):
            #result = portscan(port)
            #if result:
                #print('Port {} is open'.format(port))
            #else:
                #print('Port {} is closed'.format(port))


