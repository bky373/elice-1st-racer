/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-practice-mark?file=src%2Findex.js 
*/


/*
    index.js 코드
*/
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


/*
    App.js 코드
*/
import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <header>
        <h1>WEB</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="/1">html</a>
          </li>
          <li>
            <a href="/2">css</a>
          </li>
          <li>
            <a href="/3">javascript</a>
          </li>
        </ul>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB!
      </article>
    </div>
  );
}
