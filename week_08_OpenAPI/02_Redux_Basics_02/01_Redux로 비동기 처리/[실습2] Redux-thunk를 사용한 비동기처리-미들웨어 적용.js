/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/redux-basics-02?file=src%2Findex.js
*/


/*
    index.js 코드
*/
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { applyMiddleware, createStore } from "redux"
import rootReducer, { rootSaga } from "./modules/index"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension" // 리덕스 개발자 도구
import logger from "redux-logger"
import ReduxThunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()


/* 
미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 
예: applyMiddleware(a,b,c)
미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
// 1. 스토어를 만들고 logger를 제외한 나머지 미들웨어 redux thunk 와 saga 를 적용하세요.
*/
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
) 

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
