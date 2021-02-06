/* 
  < 실습 환경 >
      https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/* 
  [실습3]과 동일한 코드이나, 
  [실습3]에서는 src/App.js, src/index.js 코드가 기본적으로 주어져 있었다.
  [실습4]에서는 Provider 개념을 학습한 뒤, 실제로 위의 코드에 이를 적용해 코드를 작성해보았다.
*/


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
