/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';


import React, { useState, useMemo } from 'react'

const NameLength = () => {
  const [nickname, setNickname] = useState('')
  // useMemo()를 이용해 닉네임의 길이를 구해 nicknameLength 변수에 저장하세요.
  const nicknameLength = useMemo(() => nickname.length , [nickname]);

  const updateNickname = event => {
    const nickname = event.target.value
    
    setNickname(nickname)
  }

  return (
    <div>
      <input onChange={updateNickname} />
      <br/>
      <label>{nicknameLength}</label>
    </div>
  )
}

ReactDOM.render(<NameLength />,document.getElementById('root'));

