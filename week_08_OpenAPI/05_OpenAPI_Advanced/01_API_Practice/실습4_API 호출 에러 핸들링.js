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
    
    useEffect(() => {
        async function fetchUser() {
            // try ~ catch를 이용해 예외 처리를 하세요.
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/error'
                );
                setUsers(response.data);
            } catch(e) {
                setError(e)
            }
        };
        fetchUser();
    }, []);
    
    const userName = users.map(
        (user) => (<li key={user.id}> {user.name} </li>)
    );

    if (error) return <h4>에러 발생!</h4>;
    return (
        <>
            <h4>사용자 리스트</h4>
            <div> {userName} </div>
        </>
    );
}

export default Users;
