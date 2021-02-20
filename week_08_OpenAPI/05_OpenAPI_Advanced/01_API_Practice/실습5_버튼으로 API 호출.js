/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi-advanced?file=src%2FUsers.js
*/


/*
    Users.js 코드
*/
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// reducer() 함수를 완성하세요.
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                
                
                
            };
        case 'SUCCESS':
            return {
                
                
                
            };
        case 'FAIL':
            return {
                
                
                
            };
        default:
            throw new Error();
    }
}


function Users() {
    // useReducer를 선언하세요.
    const [state, dispatch] = null;
    
    async function fetchUser() {
        try {
            // dispatch를 이용해 state를 설정하는 코드입니다.
            dispatch({ type: 'LOADING' });
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            dispatch({ type: 'SUCCESS', data: response.data });
        } catch (e) {
            dispatch({ type: 'FAIL', error: e });
        }
    };
    
    useEffect(() => {
        fetchUser();
    }, []);
    
    // useReducer의 state를 불러오는 코드입니다.
    const { loading, data, error } = state;
    
    if(loading)
        return <h4>로딩중...</h4>;
    if(error)
        return <h4>에러 발생!</h4>;
    
    const userName = data.map(
        (user) => (<li key={user.id}> {user.name} </li>)
    );
    
    return (
        <>
            <h4>사용자 리스트</h4>
            <div> {userName} </div>
            <button onClick={fetchUser}>다시 불러오기</button>
        </>
    );
}

export default Users;
