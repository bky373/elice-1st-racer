/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/

/*
  useEffect(() =>
      {  }, [특정변수 혹은 오브젝트] 
  );

  이렇게 useEffect()에서 대괄호 안에 변수 혹은 오브젝트를 입력하면 입력한 것이 변화할 때 useEffect()가 호출이 됩니다. 
  하지만 대괄호가 비어있으면 변화에 대해 반응하지 않으며 최초 렌더링 혹은 컴포넌트 해제 시 호출이 됩니다. 
  프로그램 최초 실행 시 두 번째 useEffect()가 한 번 호출되고 
  10초간 입력되는 테스트 변화에 따라 첫 번째 useEffect()가 호출됩니다. 
  그리고 10초가 지난 뒤 두 번째 useEffect()가 다시 호출됩니다.
*/


/*
    index.js 코드
*/
import ReactDOM from 'react-dom';
import './index.css';

import React, { useState, useEffect } from 'react';

const Example = () => {
  const [username, setUsername] = useState("");

  // 언제 호출되는지 확인하기 위해 useEffect에서 콘솔 출력을 해보세요.
  useEffect(() => {
    console.log('effect');
    },
    [username]
  );

  useEffect(() => {
    return () => {
      console.log('clean');
    };
  }, []);

  const handleUsername = e => {
    const { value } = e.target;

    setUsername(value);
  };

  return (
    <div>
      <div>
        <input value={username} onChange={handleUsername} />
      </div>
      <div>
        <span>{username}</span>
      </div>
    </div>
  );
};

function App() {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldRender(false);
    }, 10000);
  }, []);

  return shouldRender ? <Example /> : null;
}

ReactDOM.render(<App />, document.getElementById("root"));
