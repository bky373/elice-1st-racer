/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';

import React, { useState, useEffect } from 'react';

function Container() {
  const [show, setShow] = useState(true);
  
  let myheader;
  if (show) {
    myheader = <Child />;
  }
  
  return (
    <div>
    {myheader}
    <button onClick={() => setShow(false)}>버튼</button>
    </div>
  );
}

function Child() {
  // useEffect() 내 경고 문구를 출력하는 cleanup() 메소드를 반환하세요.
  useEffect(() => {
    return function cleanup() {
      alert(`텍스트가 제거 되었습니다!`);
    }
  });
  
  return (
    <p>버튼을 클릭해 해당 텍스트를 제거하세요.</p>
  );
  
}

ReactDOM.render(<Container />,document.getElementById('root'));
