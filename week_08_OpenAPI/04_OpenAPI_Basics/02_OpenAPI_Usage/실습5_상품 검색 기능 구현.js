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
            search: '',
            goods: null
        };
    }
    
    handleChange = e => { 
        this.setState({ search: e.target.value }); 
    }
    
    // 버튼 클릭 시 입력된 검색어로 GET 요청을 하고 반환된 결과를 출력 가능한 형태로 state에 저장하세요.
    handleClick = e => {
        axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/shop',
            { params : {query : this.state.search},
              headers : {'X-Naver-Client-Id': 'hdHs6AaM3QMe_rJjueOK', 'X-Naver-Client-Secret': 'vaMZMoloKN'}
            })
            .then(response => this.setState({
                goods : response.data.items.map((good, index) => 
                    (<li key={index} dangerouslySetInnerHTML={{__html : good.title}} ></li>)
                )
            }));
    }
    

    render() {
        return (
            <div>
                <h4>상품 검색</h4>
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}> 검색 </button>
                <div>
                    {this.state.goods}
                </div>
            </div>
        );
    }

}

export default Shopping;
