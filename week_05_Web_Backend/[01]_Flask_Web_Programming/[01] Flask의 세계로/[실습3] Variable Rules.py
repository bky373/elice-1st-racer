from flask import Flask


app = Flask(__name__)

#1번을 해보세요!
@app.route('/')
def index():
    return "Index Page"


#2번을 해보세요!
@app.route('/hello')
def hello():
    return "Hello Elice!"


if __name__ == '__main__':
    app.run()