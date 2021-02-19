'''
    app.py 코드
'''
from flask import Flask, jsonify
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)


class HelloElice(Resource):
    def get(self):
        # msg 변수에 dictionary type으로 메세지를 입력해보세요!!
        msg = None
        return jsonify(status = "success", result = msg)

api.add_resource(HelloElice, '/')

if __name__ == '__main__':
    app.run()


'''
    schema.sql
'''
# create table if not exists board(
#     id int not null AUTO_INCREMENT,
#     name varchar(64) not null,
#     create_date timestamp default NOW(),
#     primary key (id)
# );

# create table if not exists boardArticle(
#     id int not null AUTO_INCREMENT,
#     title varchar(64) not null,
#     content text,
#     board_id int not null,
#     create_date timestamp default NOW(),
#     primary key (id),
#     foreign key (board_id) references board(id)
# );

# INSERT INTO board (name) VALUES ('test1');
# INSERT INTO boardArticle (title, content, board_id) VALUES ('제목1', '내용1', 1);
# INSERT INTO boardArticle (title, content, board_id) VALUES ('제목2', '내용2', 1);
# INSERT INTO boardArticle (title, content, board_id) VALUES ('제목3', '내용3', 1);

