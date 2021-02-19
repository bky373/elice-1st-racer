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
        // axios.get을 호출하고 result에 반환되는 데이터를 저장하세요.
        const url = 'https://reqres.in/api/users/2';
        axios.get(url)
              .then(response => this.setState({result : response.data.data}));
        
    }

    render() {
        const { result } = this.state;
        return (
            <div>
                <h4>React Axios로 HTTP GET 요청하기</h4>
                <div>
                    Name: {result.first_name + " " + result.last_name} <br/>  
                    Email: {result.email}
                </div>
            </div>
        );
    }

}

export default Users;
