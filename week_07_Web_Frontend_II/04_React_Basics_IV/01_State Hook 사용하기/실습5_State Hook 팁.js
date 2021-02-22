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

function UserFormFunction() {
  // name과 email에 대한 State를 각각 선언하세요.
  const [name, setName] = useState(); 
  const [email, setEmail] = useState();
  
  return (
    <>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </label>
      <br/>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <br/>
      <h3> 이름: {name}  이메일: {email} </h3>
    </>
  )
}

ReactDOM.render(<UserFormFunction />,document.getElementById('root'));
