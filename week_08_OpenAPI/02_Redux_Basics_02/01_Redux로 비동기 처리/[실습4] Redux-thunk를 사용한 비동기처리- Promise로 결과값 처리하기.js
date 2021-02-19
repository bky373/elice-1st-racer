/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/redux-basics-02?file=src%2Findex.js
*/


/*
    src/components/counter.js 코드
*/
import React from "react";
import "./Counter.scss";

function Counter(props) {
  const {
    number,
    onSetDiff,
    diff,
    onIncreaseThunk,
    onDecreaseThunk,
    onIncreaseSaga,
    onDecreaseSaga,
    onCheck,
    onInit,
    checkResult
  } = props;

  return (
    <div className="counter">
      <div className="number">Number : {number}</div>
      <div>
        diff : <input onChange={onSetDiff} value={diff} />
      </div>
      <div>
        <span> use Thunk : </span>
        <button onClick={onIncreaseThunk}>+ (Thunk)</button>&nbsp;
        <button onClick={onDecreaseThunk}>- (Thunk)</button>&nbsp;
        <br />
        {/*1.숫자의 결과를 확인하기 위한 버튼을 만드세요.*/}
        <button onClick={onCheck}>숫자가 3 이상인가요?</button>{" "}
        <b>{checkResult ? "True" : "False"}</b>
      </div>
      <div>
        <span> use Saga : </span>
        <button onClick={onIncreaseSaga}>+ (Saga)</button>&nbsp;
        <button onClick={onDecreaseSaga}>- (Saga)</button>&nbsp;
      </div>
      <div />
      <button onClick={onInit}>초기화</button>
    </div>
  );
}
export default Counter;



/*
    src/components/counter.js 코드
*/
const sleep = n => new Promise((resolve, reject) => setTimeout(resolve, n));

export const checkNumber = async number => {
  //넘버를 체크해서 프라미스를 리턴
  await sleep(1000); //1초 쉬고
  return new Promise((resolve, reject) => {
    if (isNaN(number)) reject(`${number} is NaN`);
    if (number >= 3) resolve(true);
    else resolve(false);
  });
};