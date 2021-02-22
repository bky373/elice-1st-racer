from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/",methods=['GET', 'POST'])
def post():
    #1번을 해보세요!
    if request.method == 'POST':
        value = request.form['input']
        return f"{value}님 환영합니다."
    #2번을 해보세요!
    if request.method == 'GET':
        return render_template('index.html')
        


if __name__ == "__main__":
    app.run()