/* 
  < 실습 환경 >
      https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
  바로 직전 [실습1] 코드에서 아래 코드만 수정
  - src/reducers/index.js 코드
*/
import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';
{/* 먼저 combineReducers 를 import 합니다. 
combineReducers는 reducer가 여러개 있다면, 하나로 합쳐주는 메소드입니다.*/}


const counterInitialState = {
    value: 0,
    diff: 1
};



{/*
state의 초기값 (counterInitialState)을 0으로 정의합니다.
const counter = (state = counterInitialState, action) => { ... } 는 counter의 reducer입니다. */}
{/* 
Redux에서 state는 읽기 전용이여야 하므로
return Object.assign({}, state, { }로 state를 변경시키지 않고, Object.assign 메소드를 통해 state를 복사하여, 복사한 객체를 수정하여 리턴하세요 */}


const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, { value: state.value + state.diff });
            
        case DECREMENT:
            return Object.assign({}, state, { value: state.value - state.diff });
            
        case SET_DIFF:
            return Object.assign({}, state, { diff: action.diff });
            
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter
});

{/*const counterApp = combineReducers 는 작성한 reducer을 하나로 합쳐줍니다.*/}


export default counterApp;
