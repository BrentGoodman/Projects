# Must install 'qrcode' and 'image' via pip or pip 3
# Run pip3 install qrcode image

import qrcode

def generate_qrcode(text):
    qr = qrcode.QRCode(
        version = 1,
        error_correction = qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )

    qr.add_data(text)
    qr.make(fit=True)
    img = qr.make_image(fill_color="white", back_color="black")
    img.save("qrimg.png")
    print('The QR Code image was generated and the image was saved.')

#The Link, or QR Code Text to conver goes in "INPUT_LINK_HERE".
generate_qrcode("INPUT_LINK_HERE") 


