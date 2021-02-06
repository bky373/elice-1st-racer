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
import { increment, decrement } from "../actions";

class Button extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(event) {
    {
      /*   increment라는 action을 dispatch 하세요.  */
    }
    this.props.store.dispatch(increment());
  }

  onDecrement(event) {
    {
      /*  decrement라는 action을 dispatch 하세요.  */
    }
    this.props.store.dispatch(decrement());
  }

  render() {
    return (
      <div>
        {/*3.   버튼 컴포넌트에 이벤트 핸들러를 등록하세요.  */}
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Button;


/*
    src/components/Counter.js 코드
*/
import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Value : {this.props.store.getState().counter.value}</h1>
      </div>
    );
  }
}

export default Counter;


/*
    src/components/Option.js 코드
*/
import React, { Component } from "react";
import { setDiff } from "../actions";

class Option extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.store.dispatch(setDiff(parseInt(event.target.value)));
  }

  render() {
    return (
      <div>
        <input
          value={this.props.store.getState().counter.diff}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Option;



/*
    src/reducers/index.js 코드
*/
import { INCREMENT, DECREMENT, SET_DIFF } from "../actions";
import { combineReducers } from "redux";

const counterInitialState = {
  value: 0,
  diff: 1
};

const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff
      });

    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      });

    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      });
    default:
      return state;
  }
};

const counterApp = combineReducers({
  counter
});
export default counterApp;


/*
    src/App.js 코드
*/
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import Option from "./components/Option";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Counter store={this.props.store} />
        <Option store={this.props.store} />
        <Button store={this.props.store} />
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
import counterApp from "./reducers";

const store = createStore(counterApp);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

store.subscribe(render);
render();
