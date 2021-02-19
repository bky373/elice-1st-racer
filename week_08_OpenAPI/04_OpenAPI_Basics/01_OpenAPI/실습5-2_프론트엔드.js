/*
    Users.js 코드
*/
import React from 'react';
import axios from 'axios';

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: "",
        };
    }

    componentDidMount() {
        // 백엔드 API 주소를 입력하세요. 교차 출처 리소스 공유 (CORS) 문제로 백엔드 서버에 우회하여 접속합니다.
        axios.get('https://cors-anywhere.herokuapp.com/https://j7dcpabciurbceik7vpc1ekjsiw38nch.runner-forwarder-a-02.elice.io/')
            .then(response => this.setState({ result: response.data.result.message }));
    }

    render() {
        const { result } = this.state;
        return (
            <div>
                <h5>HTTP GET 요청</h5>
                <div>
                    Message: {result}
                </div>
            </div>
        );
    }

}

export default Messages;

