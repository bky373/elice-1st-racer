## React Basic 1

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
- **State**: Props처럼 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체, 다만 `Props`는 함수의 매개변수처럼 사용되는 것이고 `State`는 함수 내에 선언된 변수처럼 사용되는 것, **`Props`는 읽기 전용으로 수정이 불가능하고, `State`는 원하는 경우 수정이 가능 **

#### React 실습환경 구축

- 먼저 알아야 할 것: 아래 내용말고도 React를 사용할 수 있는 방법은 여럿 있다. 아래는 여러 가지 중 하나의 방법일 뿐이다!

- vscode 이용시,
  - 먼저는 node.js가 설치되어 있어야 한다 (확인은 터미널에 `node -v`  와`npm -v` 입력했을 때 버전 번호가 나오면 ok) 
  - bash 터미널에서 `npx create-react-app [원하는 디렉터리명]` 을 입력한다 
  - 터미널에 `Happy hacking!` 나오면 설치 성공!
  - 이제 터미널에서 위에서 만든 reat 디렉터리로 이동한 후 `cd [위에서 쓴 디렉터리명]`  
  - 터미널에 `npm start`를 입력하자 -> 입력 후 react 심볼과 함께 기본 페이지가 나오면 성공! 추카추카! 

#### React App의 기본적인 파일 구조

- public: 이미지나 html 같은 정적 파일이 담기는 디렉토리
- src: 개발에 대한 코드를 작서하는 디렉토리
  - App.css: 컴포넌트의 스타일을 설정
  - App.js: 컴포넌트 코드가 들어있다
  - App.test.js: 컴포넌트 테스트를 위한 파일
  - index.css: 메인 페이지의 스타일을 설정
  - index.js: 주로 콛를 작성할 메인 페이지
  - serviceWorker.js: 브라우저에서 실행되는 스크립트 파일
  - setupTest.js: 컴포넌트 테스트 설정을 위한 파일
- next.config.js: 프로젝트 설저을 위한 파일
- package.json: 패키지에 관한 정보와 의존중인 버전에 관한 정보를 담고 있다
- yarn.lock: 자바스크립의 새로운 패키지 매니저인 yarn을 다양한 디바이스에서 일관성 있게 적용한다

#### React의 생명주기

- React의 생명주기: 컴포넌트가 이벤트를 다룰 수 있는 특정 시점
  - **마운트**: 컴포넌트가 실제 DOM에 삽입되는 것
  - **업데이트**: 컴포넌트가 변하는 것
  - **언마운트**: 컴포넌트가 DOM 상에서 제거되는 것
- **생명주기 메소드**
  - `constructor()`: `State` 데이터를 초기화 하는 메소드
  - `render()`: 클래스 컴포넌트에서 반드시 구현되어야 하는 메소드
  - `componentDidMount()`: render() 이후 컴포넌트가 마운트 된 직후에 한 번 호출되는 메소드
  - `componentDidUpdate()`: 업데이트가 진행된 직후에 호출되는 메소드
  - `componentWillUnmount()`: 컴포넌트가 마운트 해제되어 제거되기 직전에 호출되는 메소드

#### 참고할 부분

- 이벤트핸들러 **binding(바인딩)**을 할 때 여러 가지 방법이 있다. ([참고](https://stackoverflow.com/questions/47921276/react-event-without-binding-this/47922212))
  - **binding**이란?  react 컴포넌트에 이벤트를 연결하는 것을 말한다

