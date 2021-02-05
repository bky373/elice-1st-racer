/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';

// useState를 import하세요.
import React, { useState } from 'react'

function Example() {
  // useState()를 이용해 State인 count와 State를 갱신할 함수 useState를 선언하세요.
  const [count, setCount] = useState(0);
  
  // 변수 선언이 잘 되었는지 확인하기 위한 코드입니다. 수정하지 마세요!
  return (
    <div>
      {count}
      {setCount}
    </div>
  )
}

ReactDOM.render(<Example />,document.getElementById('root'));