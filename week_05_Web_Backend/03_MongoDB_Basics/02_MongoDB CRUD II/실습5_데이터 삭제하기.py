import pymongo

# 데이터베이스와 컬렉션을 생성하는 코드입니다. 수정하지 마세요!
connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["library"]
col = db["books"]

# 사라진 책을 데이터베이스에서 삭제하세요.
query = { "title": {"$regex": "^Alice's Adventures in Wonderland"} }

col.delete_many(query)


# 책이 잘 삭제되었는지 확인하는 코드입니다. 수정하지 마세요!
for x in col.find():
    print(x)