import pymongo


# 데이터베이스와 컬렉션을 생성하는 코드입니다. 수정하지 마세요!
connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["library"]
col = db["books"]

# 2015년에 받은 책을 삭제하기 위한 딕셔너리를 만드세요.
query = { "date_received": {"$regex": "^2015"} }


# 데이터베이스에서 2015년도에 받았던 책들을 삭제하세요.
delete_book = col.delete_many(query)
print(delete_book.deleted_count)

# 몇 권의 책이 삭제되었는지 확인하세요.


# 책이 잘 삭제되었는지 확인하는 코드입니다. 수정하지 마세요!
for x in col.find():
    print(x)