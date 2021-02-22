from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def json():
    people = [{'name':'Elice', 'birth-year':2015}, 
              {'name':'Dodo', 'birth-year':2016},
              {'name':'Queen', 'birth-year':2017}]
    #1번을 해보세요!
    return jsonify(people)

if __name__ == '__main__':
    app.run()