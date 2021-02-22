from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')


@app.route("/post", methods=['POST'])
def post():
    #1번을 해보세요!
    value = request.form['input']
    msg = "%s 님 환영합니다." % value
    return msg


if __name__ == '__main__':
    app.run()