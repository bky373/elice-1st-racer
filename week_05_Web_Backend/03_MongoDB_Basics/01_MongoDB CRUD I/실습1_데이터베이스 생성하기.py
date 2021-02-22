import pymongo

# 데이터베이스를 연결하는 코드입니다. 수정하지 마세요!
connection = pymongo.MongoClient("mongodb://localhost:27017/")

# library 데이터베이스를 만드세요.
db = connection["library"]
# print(connection.list_database_names())
# 데이터를 삽입하는 코드: 데이터베이스가 잘 생성되었는지 확인하기 위해서는 반드시 아래 주석을 해제하세요.
col = db["books"]
data = col.insert_one({ "title": "Harry Potter and the Deathly Hallows", "author": "Joanne Kathleen Rowling","publisher": "Bloomsbury Publishing" ,"date_received": "2017-07-21"})


# 데이터베이스 목록을 reuslt 리스트에 저장하세요..
result = connection.list_database_names()

# 값을 잘 저장하였는지 확인하기 위한 코드입니다. 수정하지 마세요!
print(result)