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
    // axios.delete를 호출하고 result에 반환되는 HTTP 상태 코드를 저장하세요.
    const url = "https://reqres.in/api/users/2";
    axios
      .delete(url)
      .then(response => this.setState({ result: response.status }));
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <h4>React Axios로 HTTP DELETE 요청하기</h4>
        <div>
          {/* result를 이용해 출력 결과와 동일하게 출력하세요. */}
          Status: {result}
        </div>
      </div>
    );
  }
}

export default Users;
