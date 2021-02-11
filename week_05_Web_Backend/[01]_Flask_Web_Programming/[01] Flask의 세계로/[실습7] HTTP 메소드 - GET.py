from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/')
def user_juso():
    #1번을 해보세요!
    temp1 = request.args.get('word1', 'Elice')
    #2번을 해보세요!
    temp2 = request.args.get('word2', 'Hello')
    return temp1 + "<br>" + temp2

if __name__ == '__main__':
    app.run()