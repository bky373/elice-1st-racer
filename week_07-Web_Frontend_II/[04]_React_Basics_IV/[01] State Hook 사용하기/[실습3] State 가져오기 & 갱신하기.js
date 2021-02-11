/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      {/* count의 State를 화면에 출력하세요. */}
      <p>You clicked {count} times</p>
        {/* setCount()를 이용해 버튼 클릭 시 count가 1 증가하는 코드를 작성하세요. */}
        <button onClick={() => setCount(count+1)}>
          Click me
        </button>
    </div>
  )
}

ReactDOM.render(<Example />,document.getElementById('root'));