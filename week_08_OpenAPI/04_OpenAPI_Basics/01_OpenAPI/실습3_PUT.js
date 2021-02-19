/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi?file=src%2FUsers.js
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
            result: ""
        };
    }

    componentDidMount() {
        // 수정할 데이터를 선언하세요.
        const url = 'https://reqres.in/api/users/2';
        const data = { "first_name": "White", "last_name": "Rabbit" , "email": "alice@elice.io" };
        //  axios.put을 호출하고 result에 반환되는 사용자 데이터를 저장하세요.
        axios.put(url, data)
                .then(response => this.setState({result : response.data}))
        
    }

    render() {
        const { result } = this.state;
        return (
            <div>
                <h4>React Axios로 HTTP PUT 요청하기</h4>
                <div>
                    Name: {result.first_name + " " + result.last_name} <br/>
                    Email: {result.email} <br/>
                    Update Date: {result.updatedAt} <br/>
                </div>
            </div>
        );
    }

}

export default Users;
