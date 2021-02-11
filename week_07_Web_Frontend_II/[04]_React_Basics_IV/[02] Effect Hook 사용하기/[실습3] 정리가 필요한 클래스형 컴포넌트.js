/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import React from 'react';
import ReactDOM from 'react-dom';;
import './index.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
        {myheader}
        <button type="버튼" onClick={this.delHeader}> Delete Header </button>
      </div>
    );
  }
}


class Child extends React.Component {
  // componentWillUnmount() 메소드를 생성하고 경고창을 띄우세요.
  componentWillUnmount() {
    alert(`텍스트가 제거 되었습니다!`);
  }
  
  render() {
    return (
      <p>버튼을 클릭해 해당 텍스트를 제거하세요.</p>
    );
  }
}

ReactDOM.render(<Container />,document.getElementById('root'));
