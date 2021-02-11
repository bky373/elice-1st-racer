import pymongo
from pprint import pprint


# 데이터베이스와 컬렉션을 생성하는 코드입니다. 수정하지 마세요!
connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["library"]
col = db["books"]

# 새로 들어온 책들입니다. 리스트로 묶어 선언하세요.
new_book1 = {"title": "Alice\'s Adventures in Wonderland", "author": "Lewis Carroll", "publisher": "Macmillan", "date_received": "2015-11-26"}
new_book2 = {"title": "The Old Man and the Sea", "author": "Ernest Miller Hemingway","publisher": "Charles Scribner\'s Sons" ,"date_received": "2014-11-02"}
new_book3 = {"title": "The Great Gatsby", "author": "Francis Scott Key Fitzgerald", "date_received": "2019-01-12"}



# 데이터를 만들고 삽입하세요.
my_lst = [new_book1, new_book2, new_book3]
data = col.insert_many(my_lst)

# 삽입된 데이터 id를 이용해 데이터를 보기 좋게 출력하세요.
for book_id in data.inserted_ids:
    pprint(col.find_one({"_id": book_id}))    
