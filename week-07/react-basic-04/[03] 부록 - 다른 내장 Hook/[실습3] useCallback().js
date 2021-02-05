/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';

import React, { useCallback, useState, useMemo } from 'react'

const SumString = () => {
  const [string, setString] = useState('');
  const [stringList, setStringList] = useState([]);

  const change = useCallback((e) => {
    setString(e.target.value);
  }, []);
  
  const insert = useCallback(() => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  }, [string, stringList]);
  
  // useCallback()을 이용해 리스트 내 문자열을 이어 붙인 sum 함수를 완성하세요.
  const sum = useCallback((list) => {
    let stringSum = '';

    var i;
    for(i = 0; i < list.length; i++){
      stringSum += list[i] + ' ';
    }
    
    return stringSum;
  }, []);

  const result = useMemo(() => sum(stringList), [stringList, sum]);

  return (
    <div>
      <input type='text' onChange={change}/>
      <button onClick={insert}>문자열 붙이기</button>
      <br/>
      {result}
    </div>
  )
}


ReactDOM.render(<SumString />,document.getElementById('root'));
