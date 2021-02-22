from flask import *

# Flask 인스턴스 생성
app = Flask(__name__)


# 홈 페이지로 이동
@app.route('/')
def home():
    return "주소창에 /user/admin과 /admin <br/> /user/student과 /student를 입력해보세요."


# 관리자 페이지로 이동
@app.route('/admin')
def admin():
    return "This is Admin Page"


# 학생 페이지로 이동
@app.route('/student')
def student():
    return "This is Student Page"


# redirect() 함수는 페이지에 다시 연결한다는 뜻으로 마치 페이지를 새로고침 한 것과 같은 동작합니다.
@app.route('/user/<name>')
def user(name):
    # 전달 받은 name이 'admin' 이라면?
    if name == 'admin':
        return redirect(url_for('admin'))

    # 전달 받은 name이 'student' 라면?
    if name == 'student':
        return redirect(url_for('student'))


if __name__ == '__main__':
    app.run()
