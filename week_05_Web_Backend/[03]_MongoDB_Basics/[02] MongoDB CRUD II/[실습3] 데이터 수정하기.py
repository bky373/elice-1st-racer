import pymongo


# 데이터베이스와 컬렉션을 생성하는 코드입니다. 수정하지 마세요!
connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["library"]
col = db["books"]

# 잘못 입력된 책 제목을 수정하세요.
old = { 'title' : 'The Rings of Lord' }
new = { '$set' : { 'title' : 'The Lord of the Rings' } }
col.update_one(old, new)

# 책이 잘 수정되었는지 확인하는 코드입니다. 수정하지 마세요!
for x in col.find():
    print(x)