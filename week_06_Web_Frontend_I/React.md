  ## React 학습내용 정리

  #### React를 왜 이용해야 하나 

  - Virtual DOM 활용하여 개발자의 작업 속도를 높여준다
  - 컴포넌트를 활용하여 재사용에 이점이 있다
  - 단방향 데이터 흐름을 통해 안정적인 코드를 제공한다
  - 페이스북 라이브러리로 지속적으로 개발되는 오프 소스이다
  - Hooks를 이용해 컴포넌트의 상태를 쉽게 관리할 수 있다 등등..

---

  #### 기본 개념

  - **Node.js**: Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/). ([공식 페이지](https://nodejs.org/en/) 설명), 즉 JavaScript 기반으로 구성된 서버 사이드 서비스를 JavaScript로 구현할 수 있게 만든 런타임 ([참고](https://kdydesign.github.io/2017/07/15/nodejs-npm-tutorial/))

  - **npm** (node package manager or modules): Node.js의 패키지 생태계이자 세계에서 가장 큰 오픈 소스 라이브러리 생태계

    - npm은 node.js를 설치하면 같이 설치된다. 

  - **JSX** (JavaScript XML): 자바스크립트를 확장한 문법이다. 참고로 XML은 HTML의 한계를 극복하고자 만든 마크업 언어이다. 결국 종합적으로 JSX는 React에서 사용되는 **자바스크립트 확장판 문법이고 동시에 HTML의 한계를 극복하는 문법**으로 이해하면 된다. 문법 설명은 [여기](https://ko.reactjs.org/docs/introducing-jsx.html)로

  - **Element**: React 앱의 가장 작은 단위이자 컴포넌트의 구성 요소 (쉽게 HTML 요소), 한 번 생성되면 수정이 불가능한 **불변 객체**이기 때문에 값을 변경하고 싶으면 새로운 엘리먼트를 만들어 업데이트 해야 한다

  - **DOM(Document Object Model)**: HTML요소들을 노드로 포함하는 트리와 같은 구조

  - **CDN(Contents Delivery Network)**:  지리적 물리적으로 떨어져 있는 사용자에게 컨텐츠 제공자의 컨텐츠를 더 빠르게 제공할 수 있는 기술

  - **Component**: 앱의 기능을 단위별로 캡슐화하는 React의 기본 단위, 독립적이고 **재사용 가능한 코드 조각** (쉽게 HTML 요소를 반환하는 함수와 같다), 종류로는 함수형 컴포넌트와 클래스형 컴포넌트가 있다

  - **Props**: 컴포넌트로 값을 전달하기 위한 매개변수

  - **State**: Props처럼 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체, 다만 `Props`는 함수의 매개변수처럼 사용되는 것이고 `State`는 함수 내에 선언된 변수처럼 사용되는 것, **`Props`는 읽기 전용으로 수정이 불가능하고, `State`는 원하는 경우 수정이 가능 ****

  - **Controlled Component(제어 컴포넌트)**:  사용자가 state를 제어할 수 있는 컴포넌트로, HTML에서 사용하는 폼 엘리먼트 `<input>`, `<select>`, `<textarea>`등을 Controlled Component를 통해 React에서도 동일하게 구현할 수 있다

  - **Hook**: 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 하는 기능/ 즉, 함수형 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 **연동(hook into)** 할 수 있게 해주는 것이 바로 Hook

    - **State Hook**의 사용

      ```python
      const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = userState(<상태 초깃값>);`
      ```

    - **Effect Hook**의 사용 

      ```javascript
      useEffect(() => {
          // Mounting 및 Updating 시 실행할 코드
          
          return function 함수명() {
            // Unmounting 시 실행할 코드
          }
      });
      ```

      - **클래스 컴포넌트의 생명주기 메소드를 구현할 필요 없이 함수형 컴포넌트에서 side effects들을 실행할 수 있게 해준다** (`useEffect()` 메소드는 클래스형 컴포넌트에 있는 아래 두 개의 생명주기 메소드와 동일한 기능을 한다

        ```javascript
        componentDidMount() {
            실행할 코드;
        }
        componentDidUpdate() {
            실행할 코드;
        }
        ```

      - )

      - **side effects(또는 effects)**: React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업 등으로 **렌더링 된 이후에 비동기로 처리되어야 하는 부수적인 효과**

      - **정리(Clean-up)**: 클래스형 컴포넌트에서 Unmounting시 `componentWillUnmount`를 이용해서 더 이상 사용하지 않는 컴포넌트를 해제하는 것 (메모리 누수 방지) => **Effect Hook**으로 해결할 수 있다!

    - **useReducer()**: `useState()`의 대체 함수로 많이 사용되며, 아래와 같은 형태로 사용된다

      - ```javascript
        const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
        ```

      - `reducer` 함수는 현재 상태 객체와 수행할 행동 객체를 인자로 받아서 새로운 상태 객체를 반환하는 함수

      - `dispatch` 함수는 컴포넌트 내에서 상태 변경을 일으키기 위해서 사용되는데 인자로 `reducer` 함수에 넘길 행동 객체를 받는다

      - 행동 객체는 일반적으로 어떤 부류의 행동인지를 나타내는 `type`이나 해당 행동과 관련된 데이터를 담고 있다

    - **useMemo()**: [메모이제이션](https://ko.wikipedia.org/wiki/메모이제이션)된 값을 반환해주는 메소드

      - ```javascript
        useMemo(callback, [변경되는 값]);
        ```

    - **useCallback()**: `useMemo()`와 동일하게 메모이제이션된 값을 반환하는 메소드이다. 콜백의 대상이 `useMemo()`는 숫자, 문자열, 객체 등의 일반적인 값에 사용하고, `useCallback()`은 함수에 사용한다고 이해해도 된다, 함수 생성 자체가 오래 걸리는 경우, 함수를 자식 컴포넌트에 props로 넘겨줄 때 `useCallback()`을 사용하는 것이 좋다

      - ```javascript
        useCallback(callback, [변경되는 값]);
        ```

    - **Hook의 규칙**: 

      - **최상위(at the Top Level)에서만 Hook을 호출해야 한다** (반복문(while), 조건문 (if) 혹은 중첩된 함수 내에 Hook을 호출하면 안 됨)
      - **오직 React 함수 내에서 Hook을 호출해야 한다**

  - **ServiceWorker**: 일단 [여기](https://developers.google.com/web/fundamentals/primers/service-workers/)서 참고

---

  #### React 실습환경 구축

  - 먼저 알아야 할 것: 아래 내용말고도 React를 사용할 수 있는 방법은 여럿 있다. 아래는 여러 가지 중 하나의 방법일 뿐이다!

  - vscode 이용시,
    - 먼저는 node.js가 설치되어 있어야 한다 (확인은 터미널에 `node -v`  와`npm -v` 입력했을 때 버전 번호가 나오면 ok) 
    - bash 터미널에서 `npx create-react-app [원하는 디렉터리명]` 을 입력한다 
    - 터미널에 `Happy hacking!` 나오면 설치 성공!
    - 이제 터미널에서 위에서 만든 reat 디렉터리로 이동한 후 `cd [위에서 쓴 디렉터리명]`  
    - 터미널에 `npm start`를 입력하자 -> 입력 후 react 심볼과 함께 기본 페이지가 나오면 성공! 추카추카! 

---

  #### React App의 기본적인 파일 구조

  - **public**: 이미지나 html 같은 정적 파일이 담기는 디렉토리
  - **src**: 개발에 대한 코드를 작서하는 디렉토리
    - **App.css**: 컴포넌트의 스타일을 설정
    - **App.js**: 컴포넌트 코드가 들어있다
    - **App.test.js**: 컴포넌트 테스트를 위한 파일
    - **index.css**: 메인 페이지의 스타일을 설정
    - **index.js**: 주로 코드를 작성할 메인 페이지
    - **serviceWorker.js**: 브라우저에서 실행되는 스크립트 파일
    - **setupTest.js**: 컴포넌트 테스트 설정을 위한 파일
  - **next.config.js**: 프로젝트 설정을 위한 파일
  - **package.json**: 패키지에 관한 정보와 의존중인 버전에 관한 정보를 담고 있다
  - **yarn.lock**: 자바스크립의 새로운 패키지 매니저인 yarn을 다양한 디바이스에서 일관성 있게 적용한다

---

  #### React의 생명주기

  - **React의 생명주기**: 컴포넌트가 이벤트를 다룰 수 있는 특정 시점
    - **마운트**: 컴포넌트가 실제 DOM에 삽입되는 것
    - **업데이트**: 컴포넌트가 변하는 것
    - **언마운트**: 컴포넌트가 DOM 상에서 제거되는 것
  - **생명주기 메소드**
    - **constructor()**: `State` 데이터를 초기화 하는 메소드
    - **render()**: 클래스 컴포넌트에서 반드시 구현되어야 하는 메소드
    - **componentDidMount()**: render() 이후 컴포넌트가 마운트 된 직후에 한 번 호출되는 메소드
    - **componentDidUpdate()**: 업데이트가 진행된 직후에 호출되는 메소드
    - **componentWillUnmount()**: 컴포넌트가 마운트 해제되어 제거되기 직전에 호출되는 메소드

---

  ※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>
  **※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**