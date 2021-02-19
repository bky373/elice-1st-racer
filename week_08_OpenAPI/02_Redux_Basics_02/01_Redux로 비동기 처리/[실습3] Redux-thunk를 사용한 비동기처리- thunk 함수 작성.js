/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/redux-basics-02?file=src%2Findex.js
*/


/*
    src/modules/counter.js 코드
*/
import {checkNumber} from "../apis/checkNumber"
import {delay, put, takeEvery, takeLatest} from "redux-saga/effects"

/* 액션 타입 */
const INIT = "counter/INIT"
const SET_DIFF = "counter/SET_DIFF"
const INCREASE = "counter/INCREASE"
const DECREASE = "counter/DECREASE"
const INCREASE_ASYNC = "counter/INCREASE_ASYNC"
const DECREASE_ASYNC = "counter/DECREASE_ASYNC"

/* 숫자체크하기 프라미스 */
const CHECK_NUMBER = "counter/CHECK_NUMBER"
const CHECK_NUMBER_SUCCESS = "counter/CHECK_NUMBER_SUCCESS"
const CHECK_NUMBER_ERROR = "counter/CHECK_NUMBER_ERROR"

/* 액션 생성함수 */
export const init = () => ({ type: INIT })
export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff: isNaN(Number(diff)) ? 0 : Number(diff),
})
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increaseAsync = () => ({ type: INCREASE_ASYNC })
export const decreaseAsync = () => ({ type: DECREASE_ASYNC })

//2. 리듀서가 increase 할 때와 decrease할 때 상태를 업데이트 합니다.
/*1초 후에 디스패치하는 thunk함수 내부를 작성하세요.*/
export const increaseThunk = () => (dispatch) => {
    setTimeout(() => dispatch(increase()), 1000)
}
export const decreaseThunk = () => (dispatch) => {
    setTimeout(() => dispatch(decrease()), 1000)
}


export const checkNumberThunk = () => async (dispatch, getState) => {
  dispatch({ type: CHECK_NUMBER })
  try {
    console.log(getState())
    const checkResult = await checkNumber(getState().counter.number)
    dispatch({ type: CHECK_NUMBER_SUCCESS, checkResult })
  } catch (error) {
    dispatch({ type: CHECK_NUMBER_ERROR, error })
  }
}


//1초 후에 디스패치하는 사가 제너레이터
function* increaseSaga(){
  yield delay(1000) //1초 딜레이
  yield put(increase()) //리듀서에 increase 액션 put(디스패치)(실행)
}
function* decreaseSaga(){
  yield delay(1000) //1초 딜레이
  yield put(decrease()) //리듀서에 increase 액션 put(디스패치)(실행)
}

//사가 제너레이터를 감시하는 watchSaga
export function* watchSaga(){
  //takeEvery(액션타입, 사가)
  yield takeEvery(INCREASE_ASYNC, increaseSaga) //INCREASE_ASYNC액션이 발생하면 increaseSaga 실행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga) //DECREASE_ASYNC액션 처리 중 마지막 액션만 처리함.
}




/* 초기상태 */
const initialState = {
  number: 0,
  diff: 1,
  checkResult: null,
}

/* 리듀서 */
/* 2. 리듀서가 increase 할때와 decrease할때 상태를 업데이트 해주세요.*/
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return initialState
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }
    case CHECK_NUMBER_SUCCESS:
      return {
        ...state,
        checkResult: action.checkResult,
      }
    default:
      return state
  }
}
