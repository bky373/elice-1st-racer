/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';;
import './index.css';

// useEffect를 import 하세요.
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  // useEffect()와 화살표 함수를 이용해 버튼이 클릭된 횟수를 경고창으로 띄우세요.
  useEffect (() => {
    alert(`${count}번 클릭했습니다.`);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
          버튼 클릭
        </button>
      </div>
  );
}

ReactDOM.render(<Counter />,document.getElementById('root'));
