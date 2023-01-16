import socket
import threading

# Connection Data
host = '127.0.0.1' # Localhost IP Address
port = 55555       # Any port can be used as long as it is free and not reserved.

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((host, port))
server.listen()

# Lists For Clients and Nicknames
clients = []
nicknames = []

# Send message to All Connected Clients
def broadcast(message):
    for client in clients:
        client.send(message)

# Client Messages
def handle(client):
    while True:
        try:
            message = client.recv(1024)
            broadcast(message)
        except:
            index = clients.index(client)
            clients.remove(client)
            client.close()
            nickname = nicknames[index]
            broadcast('{} left!'.format(nickname).encode('ascii'))
            nicknames.remove(nickname)
            break
        
# Listening Function
def receive():
    while True:
        client, address = server.accept()
        print("Connected with {}".format(str(address)))

        client.send('NICK'.encode('ascii'))
        nickname = client.recv(1024).decode('ascii')
        nicknames.append(nickname)
        clients.append(client)

        print('Nickname is {}'.format(nickname))
        broadcast('{} has joined!'.format(nickname).encode('ascii'))
        client.send('Connected to server'.encode('ascii'))

        thread = threading.Thread(target=handle, args=(client,))
        thread.start()

receive()