import pymysql

db = pymysql.connect(
    user = 'root',
    passwd = '',
    host='127.0.0.1',
    db = 'mydb',
    charset = 'utf8'
)

cursor = db.cursor(pymysql.cursors.DictCursor)

sql = "SELECT * FROM `topic`"
cursor.execute(sql)
result = cursor.fetchall()

for row in result:
    print(row['id'], row['title'], row['description'])
