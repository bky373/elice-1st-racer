/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';
// rabbit.png가 필요한 실습
import rabbit from './img/rabbit.png'

import React, { useState, useEffect } from 'react';

function HideAndSeek() {
  // 지시사항에 따라 코드를 작성하세요.
  useEffect(() => {
    alert('토끼를 찾았습니다!');
    
    return () => {
        alert('토끼가 숨었습니다');
    }
  });
  
  return "토끼 등장";
}

function App() {
  const [mounted, setMounted] = useState(true);
  
  const toggle = () => setMounted(!mounted);
  let find_rabbit;
  let print_img;
  if(mounted) {
    find_rabbit = <HideAndSeek/>
    print_img = <img src= {rabbit}/>
    
  }
  else {
    print_img = null;
  }
  return (
    <div>
      <button onClick={toggle}>숨기/찾기</button>
      <br/>
      {find_rabbit}
      {print_img}
    </div>
  );
}


ReactDOM.render(<App />,document.getElementById('root'));
