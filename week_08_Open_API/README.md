## Redux 학습내용 정리

### Redux  

- **Redux**는 Javascript app을 위한 **예측가능한(predictable) state container** 또는 **사용률이 높은 상태 관리 라이브러리**이다. 리액트 뿐만 아니라 Augular, jQuery, vanilla JavaScript 등 다양한 framework와 작동되게 설계되었다. 즉, 리액트만을 위한 Library는 아니다 ([출처](https://medium.com/@jsh901220/react%EC%97%90-redux-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-a8e6efd745c9))  ([생활코딩 유튜브](https://www.youtube.com/watch?v=fkNdsUVBksw&list=PLuHgQVnccGMDuVdsGtH1_452MtRxALb_7&index=1))
- **Redux는 단방향**: Redux는 앱 전체상태를 단일 스토어로 관리하여 앱 전체를 쉽게 관리할 수 있고 디버깅이나 개발자 도구를 쉽게 사용할 수 있게 한다
- **Redux의 리듀서는 순수 함수**: 순수함수란 동일한 파라미터를 주었을 때 항상 같은 값을 리턴하고 외부 상태를 변경하지 않는 함수를 말한다. 리듀서는 이전의 상태와 액션을 받아서 다음 상태를 반환하는 순수한 함수이다.

### Action, Reducer ([참고](https://redux.js.org/tutorials/fundamentals/part-1-overview))

#### Action(액션)

- 스토어에서 상태 변화를 일으킬 때 참조하는 객체이다. 즉, 애플리케이션에서 스토어로 보내는 데이터의 묶음이며, 리덕트 애플리케이션 상태를 갱신하는 유일한 방법이다.  

  - (예) To-do 애플리케이션에서 새 To-do를 추가할 때 나타내는 액션

    ```react
    const ADD_TODO = 'ADD_TODO';
    
    {
        type: ADD_TODO,
        text: '8주차 화요일 오후 집체강의 듣기'
    }
    ```

  - 액션은 **평범한 자바스크립트 객체**이다. 단, 반드시 어떤 형태의 액션이 실행될지 나타내는 **type** 속성을 가져야 한다. (type은 일반적으로 **문자열 상수**로 정의한다). 그 외의 값은 개발자 마음대로 넣어줄 수 있다.

- **액션생성함수**

  - 액션을 좀더 편하게 사용하기 위해서 사용한다. 이 함수는 액션 타입의 상수 값으로 정의해야 한다.

  - (예)

    ```react
    const INCREMENT = 'INCREMENT';
    
    const increment = (diff) => ({
        type: INCREMENT,
        diff: diff
    })
    ```

    

- Actions are **plain JavaScript objects** that **have a `type` field**. As mentioned earlier, **you can think of an action as an event that describes something that happened in the application**.

#### Reducer(리듀서)

- **상태(state)에 변화**를 일으키려면 Reducer 함수가 필요하다. 액션은 무언가 일어난다는 사실을 기술하지만, 그 겨로가 애플리케이션의 상태가 어떻게 바뀌는지는 특정하지 않는다. Reducer는 이 특정하는 일을 하게 된다.

- Reducer는 하나의 **함수**로서, 첫 번째는 **현재 상태**, 두 번째는 **액션 객체**, 이 **두 개의 파라미터**를 받는다. 

  - (예)

    ```react
    const initialState = {
    	number: 1,
    	foo: 'bar'
    }
    
    const counter = (state = initialState, action) => {
        switch(action.type) {
            case INCREMENT:
                return Object.assign([], state, {
                    number: state.number + action.diff
                })
            default:
                return state;
        }
    }
    
    {/*const counterApp = combineReducers 는 작성한 reducer을 하나로 합쳐줍니다. reducer를 export 하기 전에 작업해줍니다.*/}
    const counterApp = combineReducers({
        counter
    });
    
    export default counterApp;
    ```

- Reducer는 **이전의 state는 변경하지 않고**, 변화를 일으킨 **새로운 state 객체를 덮어씌우고 반환해야 한다**!

- 똑같은 파라미터로 호출된 Reducer 함수는 언제나 똑같은 결과값을 반환해야 한다

- **Reducer**: Reducers are **functions** that take the **current `state` and an `action` as arguments**, <u>and **return a new `state` result**</u>. In other words, 
  - **`(state, action) => newState`**

### Redux 데이터 흐름

- **Redux의 데이터 흐름**([참고](https://redux.js.org/tutorials/fundamentals/part-1-overview))에 따르면, 애플리케이션의 상태를 바꾸는 유일한 방법은 **스토어를 통해 액션을 디스패치하는 것뿐**이다. 스토어에는 액션을 인자로 받는 디스패치라는 메소드가 있다. 스토어를 통해 액션을 디스패치하면 모든 리듀서에 액션이 전달되고 상태가 갱신된다
- **흐름 순서**
  1. store.dispatch(action)을 호출한다
  2. Redux store가 reducer 함수를 호출한다
  3. root reducer는 여러 개의 reducer 결과를 combineReducers()로 하나의 state 트리에 합칠 수 있다
  4. Redux의 스토어는 root reducer로부터 반환 받은 완전한 형태의 state 트리를 저장한다

### **Redux 3가지 원칙**

1. 글로벌 앱 state(상태)는 **단일 스토어**에 보관된다

2. 스토어에 있는 state(상태)는 **앱의 다른 부분에서는 읽을 권한만** 있다

3. **reducer 함수**는 state(상태)를 **액션**을 통해 바꾸기 위해 사용된다

   => **Redux는 단방향 데이터 흐름 앱 구조를 사용**한다

### React vs Redux

- **Only React** : React 컴포넌트가 개별적으로 상태를 관리한다
- **React + Redux** : 상태관리를 하는 전용 장소(스토어)에서 상태를 관리하고, React 컴포넌트는 그걸 보여주는 용도로만 쓰다

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

### **React Redux의 Provider**

- react-redux는 컨텍스트에 스토어를 설정할 때 편리하게 사용할 수 있는 컴포넌트인 **Provider**를 제공한다. 리액트는 <u>엘리먼트를 프로바이더로 감싸기만 하면 그 엘리먼트의 모든 자식(속한 부분) 은 자동으로 컨텍스트를 통해 스토어에 접근할 수 있다</u> *프로바이더에는 자식 엘레먼트 단 하나만 들어간다!

- 예) `<Provider>`는 store를 컨텍스트에 추가하고 action이 dispatch되면 App컴포넌트를 갱신한다

- ```react
  const store = storeFactory();
  
  render( 
      <Provider store = {store}>
              <App/>
      </Provider>,
      document.getElementById('react-container')
  )
  ```

### Redux 미들웨어

- **Redux 미들웨어의 필요성**:  **디스패치된 액션을 스토어로 전달하기 전에 처리하고 싶은 작업**이 있을 수 있다. Redux는 동기적인 흐름을 통해 동작한다. (액션 객체가 생성되고, 디스패치가 액션 발생을 스토어에게 알리면, 리듀서는 정해진 로직에 의해 액션을 처리한 후, 새로운 상태값을 반환하는 과정)

- 하지만, **동기적인 흐름으로는 처리하기 힘든 작업**들이 있다. *시간을 늦추어 동작하게 한다던지, 외부데이터를 요청하여 그에 응하는 답변을 화면에 보여주어야 한다면*  어떻게 처리를 해야할까?  이러한 **비동기 작업을 처리**하는 데 있어 **Redux 미들웨어**를 사용한다.

- Redux 미들웨어는 리덕스의 기능을 확장할 때 사용하는 기능이다. 구체적으로 **Redux 흐름에서 액션이 디스패치되는 시점부터 reducer로 처리가 이동할 때까지의 처리를 확장**한다. 기능들은 다음과 같은 예를 포함한다.

  - **액션 로그를 출력**하는 미들웨어
  - **비동기 처리**를 하게 해주는 미들웨어
  - **크래시 리포트를 전송**하는 미들웨어
  - **라우팅을 위해** 사용하는 미들웨어

- **미들웨어의 구조**

  - (예)

    ```react
    const middleware = store => next => action {
    	console.log('이곳은 "액션이 디스패치 되고 리듀서로 처리가 이동하는 시점의 부분"입니다')
        const result = next(action);
        return result;
    };
    ```

- **미들웨어의 역할** 

  - 특정 조건에 따라 **액션이 무시되게** 만들 수 있다
  - 액션을 **콘솔에 출력**하거나, **서버쪽에 로깅** 할 수 있다
  - **액션**이 디스패치 됐을 때 이를 **수정해서 리듀서에게 전달**되도록 할 수 있다
  - 특정 액션이 발생했을 때 이에 기반하여 **다른 액션이 발생되도록** 할 수 있다
  - 특정 액션이 발생했을 때 **특정 자바스크립트 함수를 실행**시킬 수 있다

- **대표적인 미들웨어** : 어떤 액션이 발생했는지 로그를 남겨주는 **redux-logger**부터 비동기 작업을 처리할 수 있게 해주는 **redux-thunk**, **redux-saga**가 대표적인 미들웨어로 사용된다.

</br>

---

  ※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>
  **※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**