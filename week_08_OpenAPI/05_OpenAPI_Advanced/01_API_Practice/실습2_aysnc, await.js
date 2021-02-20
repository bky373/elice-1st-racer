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
    constructor() {
        super();
        this.state = { users: [] };
    }
    // async를 추가하세요.
    async componentDidMount() {
        // axios.get()으로 GET 요청을 하세요. 단, await를 이용해 비동기 처리가 될 수 있도록 하세요.
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // setState를 이용해 데이터를 users에 저장하세요.
            .then(response => this.setState({users : response.data}))
        
    }

    render() {
        const userName = this.state.users.map(
            (user) => (<li key={user.id}> {user.name} </li>)
        );
        
        return (
            <>
                <h4>사용자 리스트</h4>
                <div> {userName} </div>
            </>
        );
    }

}

export default Users;
