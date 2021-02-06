/* 
  < 실습 환경 >
      https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    src/actions/index.js 코드
*/
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_DIFF = "SET_DIFF";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value
  };
}


/*
    src/components/Button.js 코드
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Button extends Component {
  render() {
    return (
      <div>
        {/* 3. components 파일내 Button.js 내에 + 버튼 클릭시 props.onIncrement를
        실행하게끔 코드를 작성하세요. 마찬가지로 - 버튼 클릭시 onDecrement를
        실행하게끔 작성하세요. */}
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    //4.
    // props.onIncrement를 실행 할 경우 increment action을 dispatch 합니다.
    onIncrement: () => dispatch(increment()),
    //props.onDecrement를 실행 할 경우 decrement action을 dispatch 합니다.
    onDecrement: () => dispatch(decrement())
  };
};

//props를 store의 state에 매칭 시켜주는 connect 함수를 실행 합니다.
Button = connect(
  undefined,
  mapDispatchToProps
)(Button);

export default Button;



/*
    src/components/Counter.js 코드
*/
import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      /*. 1. props.value로 store 값을 가져오세요. */
      <div>
        {" "}
        <h1>Value : {this.props.value}</h1>{" "}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return { value: state.counter.value };
};

/*2. 카운터를 export하기전에 스토어의 state를 props로 매핑하세요*/
Counter = connect(mapStateToProps)(Counter);

export default Counter;


/*
  src/components/Option.js 코드
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { setDiff } from "../actions";

class Option extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onUpdateDiff(parseInt(event.target.value));
  }

  render() {
    return (
      <div>
        <input value={this.props.diff} onChange={this.onChange} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    diff: state.counter.diff
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onUpdateDiff: value => dispatch(setDiff(value))
  };
};

Option = connect(
  mapStateToProps,
  mapDispatchToProps
)(Option);

export default Option;


/*
    src/reducers/index.js 코드
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


/*
    src/App.js 코드
*/
import React, { Component } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Option from "./components/Option";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Option />
        <Button />
      </div>
    );
  }
}

export default App;


/*
    src/index.js 코드
*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import counterApp from "./reducers";

const store = createStore(counterApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
