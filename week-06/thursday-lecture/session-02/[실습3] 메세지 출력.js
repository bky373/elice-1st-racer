/*
    App.js 코드
*/
import React, { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState("오늘의 점심메뉴는?");

  return <h1>{message}</h1>
};

export default App;


/*
    index.js 코드
*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


