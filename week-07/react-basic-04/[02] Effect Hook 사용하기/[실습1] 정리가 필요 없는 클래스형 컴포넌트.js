/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react'

const useUser = () => {
  // useState()를 이용해 state 변수를 만드세요.
  let [nickname, setNickname] = useState("")

  const updateNickname = event => {
    const nickname = event.target.value

    setNickname(nickname)
  }

  return [nickname, updateNickname]
}

const User = () => {
  // React Hook을 호출하세요.
  const [nickname, setNickname] = useUser();

  return (
    <div>
      <label>{nickname}</label>
      <br/>
      <input 
        value={nickname} 
        onChange={setNickname} 
      />
    </div>
  )
}

ReactDOM.render(<User />,document.getElementById('root'));
