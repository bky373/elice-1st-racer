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
        // 자신의 OpenAPI 키를 입력하세요.
        const CLIENT_ID = '자신의 CLIENT_ID';
        const CLIENT_SECRET = '자신의 CLIENT_SECRET';
        
        axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/shop',
            { params: { query: '컴퓨터' }, 
              headers: {'X-Naver-Client-Id': CLIENT_ID, 'X-Naver-Client-Secret': CLIENT_SECRET}
            })
            .then(response => this.setState({ result: response.data.items }));
            
    }

    render() {
        const { result } = this.state;
        // map() 함수를 이용해 검색된 title에 dangerouslySetInnerHTML을 적용하여 출력하세요.
        const goods = result.map((item, index) =>
                            (<li key={index} dangerouslySetInnerHTML={{ __html: item.title }}></li>)
                    );
        return (
            <div>
                <h4>상품 리스트</h4>
                <div>
                    {goods}
                </div>
            </div>
        );
    }

}

export default Shopping;
