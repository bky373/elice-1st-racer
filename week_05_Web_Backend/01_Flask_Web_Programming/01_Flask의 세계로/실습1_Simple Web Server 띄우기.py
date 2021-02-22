#1번을 해보세요!
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_elice():
    return "Hello Elice!"
    

if __name__ == '__main__':
    app.run()
