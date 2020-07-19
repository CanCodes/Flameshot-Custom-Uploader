# A Basic Custom Uploader For Flameshot
You can probably use this with other tools as well, but I created this for flameshot.

### How To Use
-------------------------
1. Clone the repository
2. Go put the server folder in your host's directory.
3. Go create a TOKEN for yourself (You can just smash your keyboard too)
4. change the `server/app.js` file so that **TOKEN** is **YOUR** token.
5. change the `local/main.py` file so that `config['token']` is YOUR token and `config['url']` is your URL (Keep the `/` at the end).
6. Start app.js on your host.

Now here comes the fun part, since flameshot allows us to copy the image thru a command, we will use the bytes that flameshot gives us and convert them to an actual image with the help of our `main.py`.

So the command is this:

`flameshot gui -r | python3 your-directory-to/local/main.py`

What you can do is add a custom shortcut to your keyboard to trigger this command. 

Once the command gets executed, you should have the url to the picture on your clipboard so that you can just paste it anywhere you want.

### Contribution
You can always create a pull request or an issue.