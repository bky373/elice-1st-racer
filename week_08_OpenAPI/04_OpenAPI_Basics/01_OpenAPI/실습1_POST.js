/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi?file=src%2FUsers.js
*/


/*
    Users.js 코드
*/
import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  componentDidMount() {
    // 삽입할 데이터 객체를 선언하세요.
    // axios.post를 호출하고 result에 반환되는 토큰 값을 저장하세요.
    const url = "https://reqres.in/api/login";
    const data = { email: "eve.holt@reqres.in", password: "cityslicka" };

    axios
      .post(url, data)
      .then(response => this.setState({ result: response.data.token }));
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <h4>React Axios로 HTTP POST 요청하기</h4>
        <div>Token: {result}</div>
      </div>
    );
  }
}

export default Users;
