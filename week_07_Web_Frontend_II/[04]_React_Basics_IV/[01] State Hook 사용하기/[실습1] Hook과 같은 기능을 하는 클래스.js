/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);
    
    // count의 state를 0으로 설정하세요.
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        {/* count의 state를 출력하세요. */}
        <p>You clicked {this.state.count} times</p>
        {/* setState()를 이용해 버튼 클릭 시 count가 1 증가하는 코드를 작성하세요. */}
        <button onClick={() => this.setState({ count : this.state.count + 1})}>
          Click me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Example />,document.getElementById('root'));