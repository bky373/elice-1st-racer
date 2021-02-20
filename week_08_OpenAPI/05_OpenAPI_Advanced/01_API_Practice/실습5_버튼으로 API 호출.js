/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi-advanced?file=src%2FUsers.js
*/


/*
    Users.js 코드
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // fetchUser() 함수를 useEffect 밖으로 분리하세요.
    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
      // 함수가 처음 시작할 때 loading state를 true, 끝날 때 false로 설정하세요.
      setLoading(true);
      try {
          const response = await axios.get(
              'https://jsonplaceholder.typicode.com/users'
          );
          setUsers(response.data);
      } catch (e) {
          setError(e);
      }
      setLoading(false);
    }
    
    const userName = users.map(
        (user) => (<li key={user.id}> {user.name} </li>)
    );
    
    if(loading)
        return <h4>로딩중...</h4>;
    if (error) return <h4>에러 발생!</h4>;
    return (
        <>
            <h4>사용자 리스트</h4>
            <div> {userName} </div>
            {/* 버튼 클릭 시 fetchUser() 함수를 불러오는 이벤트를 등록하세요. */}
            <button onClick={fetchUser}>다시 불러오기</button>
        </>
    );
}

export default Users;
