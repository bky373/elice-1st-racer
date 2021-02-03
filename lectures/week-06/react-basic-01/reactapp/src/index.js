import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

/* [01 React란?] 실습은 굳이 필요하지 않아 제외합니다 */
/* [02 JSX 문법 및 렌더링] 실습 */

/*
  [실습1] 아래 HTML을 JSX로 변환하기
  <h2>코더랜드에 오신것을 환영합니다:)</p>
  <h2>즐거운 React! 함께 공부해봐요~</p>
*/

const element = (
  <div>
      <h2>
              코더랜드에 오신것을 환영합니다:)
      </h2>
      <h2>
              즐거운 React! 함께 공부해봐요~
      </h2>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));


/*
  [실습2] JSX에 표현식 포함하기
*/

//name변수를 선언하고, 이름을 저장합니다.
const name = "Josh Perez"

//표현식을 사용하여 name을 포함합니다.
const element2 = <h1>Hello, {name}</h1>;

ReactDOM.render(element2,document.getElementById('root'));


/*
  [실습3] JSX에 표현식 포함하기
*/

//함수를 정의합니다.
function hello(){
  return "안녕하세요! ";
}

//함수표현식을 사용하여 함수를 호출합니다.
//<h2>태그를 사용해 함수의 결과값을 화면에 출력합니다.
const element3 = <h2>{hello()} 코더랜드에 오신 걸 환영합니다:)</h2>;;


ReactDOM.render(element3, document.getElementById('root'));



/*
  [실습4] 함수에 JSX 활용하기
*/

//고객의 이름을 출력하는 함수
function formatName(user){
  return user.lastName + ' ' + user.firstName;
}

//고객의 이름을 저장하는 변수
const user = {
  lastName: '코딩하는',
  firstName: '엘리스'
}

//인사문구를 출력하는 함수
//formatName()함수를 사용해 출력문구를 완성합니다.
function getGreeting(user) {
  return <h1>Hello, {formatName(user)}!</h1>;
}


//getGreeting()의 결과값을 element에 저장합니다.
const element4 = getGreeting(user);

ReactDOM.render(element4, document.getElementById('root'));

serviceWorker.unregister();



/*
  [실습5] JSX 속성 정의
*/

const elemnet5 = (
  <a href = 'https://kdt.elice.io/explore'>다양한 과목을 배워봅시다!</a>
);

ReactDOM.render(elemnet5, document.getElementById('root'));


/*
  [실습6] JSX로 자식 정의
*/

//자식태그를 활용하여 JSX코드를 작성해 element에 저장합니다.
const element6 = (
    <div>
        <h2>안녕하세요:)</h2>
        <h2>오늘도 화이팅!!</h2>
    </div>
);


ReactDOM.render(element6, document.getElementById('root'));


/*
  [실습7] JSX의 객체 표현
*/

//element 객체를 생성합니다.
const element7 = React.createElement('h2', {className: 'welcome'}, '코더랜드에 오신것을 환영합니다:)');

ReactDOM.render(element7, document.getElementById('root'));


/*
  [실습8] DOM에 엘리먼트 렌더링
*/

//hello, React!를 출력하는 JSX를 element에 저장합니다.
const element8 = <h1>Hello, React!</h1>;

//ReactDOM에 element를 렌더링합니다.
ReactDOM.render(element8, document.getElementById('root'));


/*
  [실습9] 렌더링 된 엘리먼트 업데이트
*/

// 버튼 클릭된 횟수를 저장
let value = 0

// 버튼 클릭시 횟수를 증가시키는 함수를 정의
function click(){
  value += 1
}

function tick(){
  const element9 = (
    <div>
      <h1>버튼을 클릭해보세요</h1>
      <button onClick={click}>Click Me!</button>
      <h2>총 {value}번 클릭했습니다.</h2>
    </div>
  );

  ReactDOM.render(element9, document.getElementById('root'));
}

// setInterval(tick, 1000) // 1초에 한 번씩 tick 함수 호출 




/* [03 컴포넌트] 실습 */

/* [실습1] 함수 컴포넌트 */

const name31 = "Sara"

//함수명이 Welcome인 컴포넌트를 작성합니다.
function Welcome31(props) {
  return <h2>Welcome, {props.name}!</h2>
}

//컴포넌트를 호출하여 element에 저장합니다.
const element31 = <Welcome31 name = {name31} />;

ReactDOM.render(element31, document.getElementById('root'));


/* [실습2] 클래스 컴포넌트 */

//정의된 이름
const name32 = "Mark"

//클래스명이 Welcome인 컴포넌트를 작성합니다.
class Welcome32 extends React.Component{
  render() {
    return <h2>Welcom, {name32}</h2>
  }
}

//컴포넌트를 호출하여 element에 저장합니다.
const element32 = <Welcome32 />;

ReactDOM.render(element32, document.getElementById('root'));


/* [실습3] 컴포넌트 렌더링 */

//클래스명이 Welcome인 컴포넌트를 작성합니다.
class Welcome33 extends React.Component{
  render(){
      return <h2>안녕하세요. {this.props.name}님!</h2>
  }
}


//컴포넌트를 호출하여 element에 저장합니다.
//단, props는 name="Sara"를 제공합니다.
const element33 = <Welcome33 name="Borahm"/>;

ReactDOM.render(element33, document.getElementById('root'));

serviceWorker.unregister();
