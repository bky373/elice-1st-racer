import pymongo
from pprint import pprint


# 데이터베이스와 컬렉션을 생성하는 코드입니다. 수정하지 마세요!
connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["library"]
col = db["books"]

# pprint를 이용해 데이터를 보기 좋게 출력하세요.
for book in col.find():
    pprint(book)
