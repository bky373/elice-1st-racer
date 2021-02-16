## Redux 학습내용 정리

### Redux  

- **Redux**는 Javascript app을 위한 **예측가능한(predictable) state container** 또는 **사용률이 높은 상태 관리 라이브러리**이다. 리액트 뿐만 아니라 Augular, jQuery, vanilla JavaScript 등 다양한 framework와 작동되게 설계되었다. 즉, 리액트만을 위한 Library는 아니다 ([출처](https://medium.com/@jsh901220/react%EC%97%90-redux-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-a8e6efd745c9))  ([생활코딩 유튜브](https://www.youtube.com/watch?v=fkNdsUVBksw&list=PLuHgQVnccGMDuVdsGtH1_452MtRxALb_7&index=1))
- **Redux는 단방향**: Redux는 앱 전체상태를 단일 스토어로 관리하여 앱 전체를 쉽게 관리할 수 있고 디버깅이나 개발자 도구를 쉽게 사용할 수 있게 한다
- **Redux의 리듀서는 순수 함수**: 순수함수란 동일한 파라미터를 주었을 때 항상 같은 값을 리턴하고 외부 상태를 변경하지 않는 함수를 말한다. 리듀서는 이전의 상태와 액션을 받아서 다음 상태를 반환하는 순수한 함수이다.

### Action, Reducer, Store ([참고](https://redux.js.org/tutorials/fundamentals/part-1-overview))

- **Action**: <u>Actions are plain JavaScript objects that have a `type` field</u>. As mentioned earlier, **you can think of an action as an event that describes something that happened in the application**.
- **Reducer**: <u>Reducers are functions that take the current `state` and an `action` as arguments</u>, <u>and return a new `state` result</u>. In other words, **`(state, action) => newState`**

### Redux 및 Redux 확장 프로그램 설치하기 (출처 : [elice](https://kdt.lms.elice.io/))

Redux를 직접 설치하고 적용해봅시다.

**설치**

```shell
npm install --save redux react-redux
```

또는

```shell
yarn add redux react-redux
```

**redux를 프로젝트에 추가한다면**

```shell
$ npm i redux
```

**리액트 프로젝트에 Redux를 추가한다면**

```shell
$ npm i redux
$ npm i react-redux
```

기본적으로 자바스크립트로 작성된 라이브러리에서 모두 사용 가능한 redux와
리액트와 Redux의 공식 바인딩 패키지인 react-redux를 함께 설치해줍니다.

그 다음은 store를 생성하기전에 프로젝트를 진행하는 도움이 되는 몇가지 library을 설치해주세요.

```shell
- yarn add redux-thunk
- yarn add redux-logger --dev
- yarn add react-router-dom react-router-redux history
- yarn add redux-devtools-extension --dev
```

### Redux 확장프로그램 설치하기 (출처: [elice](https://kdt.lms.elice.io/))

Redux의 개발자 도구(redux-devtools 확장 프로그램)를 사용하면 현재 스토어의 상태를 개발자 도구에서 조회 할 수 있고 지금까지 어떤 액션들이 디스패치 되었는지, 그리고 액션에 따라 상태가 어떻게 변화했는지 확인할 수 있습니다. 추가적으로 액션을 직접 디스패치 할 수도 있습니다.

1) 먼저 [크롬 웹스토어](https://https//chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)로 가면 Redux DevTools 이란 크롬 확장 프로그램을 받을 수 있습니다. 여기서 확장 프로그램을 설치해줍니다.
설치 후 아래와 같이 스토어(Store) 생성 시 + window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION() 를 추가해주면 크롬 개발자 모드에서 Redux의 상태 변화를 볼 수 있습니다.

```
const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

2) 다음은 프로젝트에 redux-devtools-extension라이브러리를 설치해줍니다.

```shell
//yarn으로 설치하는 경우
yarn add redux-devtools-extension
```

또는

```shell
//npm으로 설치하는 경우
npm add redux-devtools-extension
```

3) 다음에는 index.js를 수정해주면 됩니다.

```javascript
import { composeWithDevTools } from 'redux-devtools-extension'; // Redux 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성
// composeWithDevTools 함수로 Redux 개발자 도구 활성화
```

### **React Redux 설치하기**

```shell
npm install react-redux --save
```

  #### 참고할 부분

  - 이벤트핸들러 **binding(바인딩)**을 할 때 여러 가지 방법이 있다. ([참고](https://stackoverflow.com/questions/47921276/react-event-without-binding-this/47922212))
    - **binding**이란?  **react 컴포넌트에 이벤트를 연결하는 것**을 말한다

### **React Redux의 Provider**

- react-redux는 컨텍스트에 스토어를 설정할 때 편리하게 사용할 수 있는 컴포넌트인 **Provider**를 제공한다. 리액트는 <u>엘리먼트를 프로바이더로 감싸기만 하면 그 엘리먼트의 모든 자식(속한 부분) 은 자동으로 컨텍스트를 통해 스토어에 접근할 수 있다</u> *프로바이더에는 자식 엘레먼트 단 하나만 들어간다!

- 예) `<Provider>`는 store를 컨텍스트에 추가하고 action이 dispatch되면 App컴포넌트를 갱신한다

- ```javascript
  const store = storeFactory();
  
  render( 
      <Provider store = {store}>
              <App/>
      </Provider>,
      document.getElementById('react-container')
  )
  ```

---

  ※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>
  **※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**