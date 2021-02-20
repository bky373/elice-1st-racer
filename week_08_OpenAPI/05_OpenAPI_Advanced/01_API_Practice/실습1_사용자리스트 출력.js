/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi-advanced?file=src%2FUsers.js
*/


/*
    Users.js 코드
*/
import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        // 주어진 API에 GET 요청을 하여 사용자 데이터를 users state에 저장하세요.
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => this.setState({users : response.data}))
    }

    render() {
        // 출력 결과와 동일하게 출력될 수 있도록 렌더링하세요.
        
        return (
            <>
            <div>
              <h4>사용자 리스트</h4>
            </div>
            <div>
              {this.state.users.map((user) =>
              <li key={user.id}>{user.name}</li>)}
            </div>
            </>
        );
    }
}

export default Users;
