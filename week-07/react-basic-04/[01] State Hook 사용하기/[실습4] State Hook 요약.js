/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';

// 지시사항에 따라 출력 결과와 동일한 동작을 하는 코드를 작성하세요.
import React, { useState } from 'react';

function Apple() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <p>당신에게 {count}개의 사과가 남았습니다.</p>
            <button onClick={() => setCount(count-1)}>Eat apple</button>
            <button onClick={() => setCount(count+1)}>Buy apple</button>
    </div>
  );
}

ReactDOM.render(<Apple />, document.getElementById('root'));