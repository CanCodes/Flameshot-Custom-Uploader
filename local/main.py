import io
from requests import post
import sys
import pyperclip
import os
from PIL import Image

config = {
	'url': "YOUR_APPLICATION_DOMAIN_HERE", # Keep the last '/' please.
	'token': "GENERATED_TOKEN_HERE"
}

if __name__ == "__main__":

    data = sys.stdin.buffer.read()
    im = Image.open(io.BytesIO(data))
    r = post(f"{config['url']}?key={config['token']}", files={'file': io.BytesIO(data)})
    if r.status_code == 200:
        pyperclip.copy(f"{config['url']}{r.json()['url']}")
    else:
        print("somethings went wrong.")
