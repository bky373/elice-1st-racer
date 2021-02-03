import random
from flask import Flask

import pymysql
db = pymysql.connect(
    user='root', 
    passwd='', 
    host='127.0.0.1', 
    db='mydb', 
    charset='utf8'
)
cursor = db.cursor(pymysql.cursors.DictCursor)

app = Flask(__name__)

@app.route('/')
def hello_world():
    sql = "SELECT * FROM topic"
    cursor.execute(sql)
    result = cursor.fetchall()
    output = '<style>td{border:1px solid red;}</style><table>'
    for row in result:
        print(row['id'], row['title'], row['description'])
        output = output + '<tr><td>' + str(row['id']) + '</td><td>' + row['title'] + '</td></tr>'
    output = output + '</table>'
    return output

if __name__ == '__main__':
    app.run(debug=True)