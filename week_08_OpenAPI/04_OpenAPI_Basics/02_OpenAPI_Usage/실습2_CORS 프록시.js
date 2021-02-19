/* 시작하기 전에,
   
  < 실습 환경 >
      https://stackblitz.com/edit/react-openapi?file=src%2FUsers.js
*/


/*
  Shopping.js 코드
*/
import React from 'react';
import axios from 'axios';

class Shopping extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: []
        };
    }

    componentDidMount() {
        const url = 'https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/shop';
        // axios.get을 호출하고 result에 반환되는 HTTP 응답 코드를 저장하세요.
        axios.get(url,
            { params: { query: '컴퓨터' },
              headers: {
                'X-Naver-Client-Id': '자신의 CLIENT_ID',
                'X-Naver-Client-Secret': '자신의 CLIENT_SECRET'
              }
            })
            .then(response => this.setState({result: response.status}))
        
    }

    render() {
        const { result } = this.state;
        
        return (
            <div>
                <h4>HTTP 상태 코드</h4>
                <div>
                    {result}
                </div>
            </div>
        );
    }

}

export default Shopping;
