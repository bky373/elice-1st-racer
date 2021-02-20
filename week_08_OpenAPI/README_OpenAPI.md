## OpenAPI 학습내용 정리

### API

- **API**는 **Application Programming Interface**의 줄임말로 다양한 응용 프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 **인터페이스**이다. 
- 손님과 요리사를 연결해주는 식당의 **점원**처럼 하나의 **프로그램과 다른 프로그램을 연결해 주는 다리 역할**을 한다.

### OpenAPI

- **OpenAPI(OpenApplication Programming Interface)** : 누구나 사용할 수 있도록 공개되어 개발자에게 사유 응용 소프트웨어나 웹서비스에 프로그래밍적인 권한을 제공하는 API. 즉, **말그대로 누구나에게나 공개된 API**
- **예시**
  - **공공 데이터 포털** : https://www.data.go.kr/tcs/dss/selectDataSetList.do
  - **카카오 오픈 API** : https://developers.kakao.com/
  - **네이버 오픈 API** : https://developers.naver.com/
    - 아래 사용 예시를 설명해두었다.

#### OpenAPI를 사용하는 이유

- OpenAPI를 이용하여 개발하는 방법은 어느 정도 **획일화** 되어있기 때문에 다른 사람들과 **협업하기에 편리**합니다. 또한, 코드를 작성하는 **시간이 절약**되어 개발 **비용이 절감**되는 장점이 있다
- OpenAPI를 사용하면 API 테스트를 통한 **품질 보장**이 가능하고 **사용자와의 상호작용을 중요시 하는 서비스를 개발**할 수 있다

#### OpenAPI를 제공하는 이유

- 많은 기업 및 단체들이 왜 API를 Open할까?
  - 기업들은 OpenAPI를 고객들에게 제공함으로써 **사용자가 서비스나 상품을 이용하는 것에 대한 장벽을 허물게 된다**.이는 고객이 자신의 요구에 적합한 방식으로 서비스를 이용할 수 있다는 것을 의미하며 기업은 **고객과의 관계를 강화**할 수 있게 된다. 
  - 개발자들이 기업의 API를 연구하고 통찰하여 새로운 서비스를 만들어내면, 기업은 그것을 참고하여 고객이 원하는 서비스가 무엇인지 더 고민해볼 수 있다.

## Axios

- **Axios**는 **웹브라우저와 Node.js를 위한 HTTP 비동기 통신 라이브러리**이다. 쉽게 말해 백엔드와 프론트엔드간 통신을 쉽게 하기 위해 사용되는 것으로 **Ajax**처럼 사용되는 것이다.

- **Ajax**란 비동기 자바스크립트란 의미로 **Asynchronous JavaScript and XML**의 약자이다. Ajax는 브라우저가 가지고 있는 [**XMLHttpRequest**](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest) 객체를 이용하여 화면 전체를 새로 고침 하지 않고 **변경된 일부 데이터만 로드**하는 비동기 처리를 가능하게 한다. **Axios는 React에서 제공하는 Ajax와 유사**하다. 

- **OpenAPI**를 이용한 통신을 할 때 **Axios**를 주로 사용한다.

  >  Axios는 **Promise를 기반**으로 만들어진 라이브러리이다. **Promise**는 **자바스크립트 ES6**에서 **비동기처리를 위해 주로 사용되는 객체**이다.

### CRUD

- **CRUD**는 **Create, Read, Update, Delete**의 줄임말이며, 각각은 아래와 같이 매칭된다.
  - **Create(생성)** : **POST**
  - **Read(조회)** : **GET**
  - **Update(수정)** : **PUT**
  - **Delete(삭제)** : **DELETE**
- **PUT과 DELETE**는 REST 기반 API 프로그램에서 데이터베이스에 저장된 내용을 다룰 때 사용되는 메서드이므로, **OpenAPI를 다룰 때는 사용할 일이 거의 없다.**

#### Axios 사용법

- **React에서 Axios**를 사용하는 예시

```react
import axios from 'axios'

// 실습 url 주소: https://reqres.in/api 

// Create(생성) : POST
// POST는 새로운 자원을 생성할 때 사용한다.
axios.post(url, data 객체)
	.then(function(response) {
    	// response 객체는 반환되는 데이터, HTTP 상태코드, 헤더정보 등여러 정보를 가지고 있다
    	console.log(response);
		console.log(response.data);
        console.log(response.status);  // HTTP 상태 코드
	});


// Read(조회) : GET
// GET는 자원을 요청할 때 사용한다.
axios.get(url)
	.then(response => this.setState({ result : 설정할 값 }));


// Update(수정) : PUT
// PUT은 자원을 갱신할 때 사용한다.
// 위의 실습 API는 테스트하기 위한 용도로 PUT 요청을 지원하지만,
// 대부분의 OpenAPI는 PUT 요청을 지원하지 않는다.
// 만약 
axios.put(url, data 객체)
		.then(response => this.setState({ result : 설정할 값 }))


// Delete(삭제) : DELETE
// DELETE는 자원을 삭제할 때 사용한다.
// PUT과 마찬가지로, 대부분의 OpenAPI는 DELETE 요청을 지원하지 않는다.
axios.delete(url)
		.then(response => this.setState({ result : 설정할 값 }))


// Update(수정) : PATCH
// PATCH는 데이터의 전체가 아닌 일부 데이터만 수정할 때 사용한다.
// 예를 들어, PUT으로 넘겨준 객체(원래는 name과 email을 가진 객체)가 name만 가지고 있다면 email은 null로 바뀌지만, PATCH로 넘겨주면 name이 변경되고 email은 기존의 데이터를 유지한다.
axios.patch(url, data 객체)
		.then(response => this.setState({ result : 설정할 값 }))

```

## CORS

- **CORS**란 **Cross-Origin-Resource-Sharing**의 줄임말로 **한 애플리케이션이 다른 도메인의 자원에 접근할 수 있는 권한을 부여**하도록 브라우저에 알려주는 것을 말한다. **애플리케이션이 사용할 자원을 가진 서버의 도메인이 자신의 도메인과 다를 때 실행한다**. 
- **등장 배경**: 기존에는 서버에 있는 자원을 사용할 때 다른 외부의 접근은 해킹과 같은 악의적인 목적뿐일 것으로 생각했다. 그래서 이러한 자원 요청을 차단하였지만, 최근에는 OpenAPI 같은 것이 등장하면서 외부의 접근이 자연스러워졌다. 그에 따라 서로 다른 도메인의 자원에 접근이 가능하도록 CORS가 만들어졌다.

### CORS 에러

- CORS를 이용해 외부 자원에 접근할 수는 있지만, 서버에서 무조건 이를 허용하는 것은 아니다. 여전히 악의적인 목적으로 자원을 이용할 여지가 있기 때문이다. 
- 네이버에서도 다른 사람의 클라이언트 키를 도용해서 API를 호출하는 것을 막기 위해서 무조건 CORS를 허용하지는 않다. 또한 API 사용 시 CORS를 지원하지 않는 경우도 있기 때문에 해결 방법을 알아두는 것이 좋다.

### 에러 해결 방법

1. 백엔드에서 특정 도메인에 대한 CORS를 허용
2. [JSONP](https://ko.wikipedia.org/wiki/JSONP) : HTML의 `<script>` 태그는 보안 정책이 적용되지 않는다는 점을 이용하여 외부 자원을 JSON 형태로 변환해 데이터를 받아오는 방법
3. [**프록시** ](https://ko.wikipedia.org/wiki/프록시_서버)**설정** : 서버와 사용자 간에 통신을 할 때 중계기 역할을 하는 것이 프록시 서버이다. API와 사용자 간에 프록시 설정을 하여 **서버의 자원을 프록시 서버에서 받아오고** 사용자에게는 **CORS가 허용된 것처럼 HTTP 요청을 허용해주는 것**이다. (즉, **프록시를 이용해** **서버에 대한 접근을 우회**한다.)
   - React 프로젝트에서 프록시 설정도 가능하지만, `https://cors-anywhere.herokuapp.com/`을 이용하면 CORS 프록시 설정을 간편하게 할 수 있다. 해당 주소 뒤에 사용할 API 주소를 이어 붙이기만 하면 되고, 사용 전, 위의 herokuapp url에 접속해 **회색 버튼 클릭**을 통해 기능을 활성화 해주면 된다! 

## 네이버 OpenAPI 사용하기

- [API 공통 가이드](https://developers.naver.com/docs/common/openapiguide/appregister.md#%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%93%B1%EB%A1%9D)

- [등록 링크](https://developers.naver.com/apps/#/register?defaultScope=search) 접속

- **애플리케이션 등록 관련**

  - **애플리케이션 이름**: 자신이 신청한 OpenAPI의 이름 자유롭게 입력(10자 이내 추천)

  - **사용 API**: 사용할 OpenAPI를 선택한다. (예) 검색

  - **비로그인 오픈 API 서비스 환경**: 네이버 OpenAPI에 로그인을 하고 사용해야 하는 것과 그렇지 않은 것이 있는데, 비로그인 환경에서 사용할 도메인 주소를 입력한다. **일반적으로 `http://localhost`를 입력해주면 된다**

  - 등록이 완료되면,  **Client ID**와 **Client Secret**을 얻을 수 있고, 해당 키를 가지고 OpenAPI에 접근할 수 있다. 부여되는 키는 개인의 것이므로 공유해서는 안 된다.

    - **Client ID**: OpenAPI 사용에 대한 **인증 및 권한** 부여에 사용되는 **사용자의 ID**입니다.

    - **Client Secret**: OpenAPI 사용에 대한 **인증 및 권한** 부여에 사용되는 **사용자의 비밀번호**입니다.

      > 참고로, API를 호출할 수 있는 횟수가 일별로 제한되어 있다.

- **실습 예시**

  - [실습1_OpenAPI 사용](https://github.com/bky373/elice-1st-racer/blob/master/week_08_OpenAPI/04_OpenAPI_Basics/02_OpenAPI_Usage/%EC%8B%A4%EC%8A%B51_OpenAPI%20%EC%82%AC%EC%9A%A9.js)
  - [실습2_CORS 프록시](https://github.com/bky373/elice-1st-racer/blob/master/week_08_OpenAPI/04_OpenAPI_Basics/02_OpenAPI_Usage/%EC%8B%A4%EC%8A%B52_CORS%20%ED%94%84%EB%A1%9D%EC%8B%9C.js)
  - [실습3_상품 리스트 출력](https://github.com/bky373/elice-1st-racer/blob/master/week_08_OpenAPI/04_OpenAPI_Basics/02_OpenAPI_Usage/%EC%8B%A4%EC%8A%B53_%EC%83%81%ED%92%88%20%EB%A6%AC%EC%8A%A4%ED%8A%B8%20%EC%B6%9C%EB%A0%A5.js)
  - [실습4_dangerouslySetInnerHTML](https://github.com/bky373/elice-1st-racer/blob/master/week_08_OpenAPI/04_OpenAPI_Basics/02_OpenAPI_Usage/%EC%8B%A4%EC%8A%B54_dangerouslySetInnerHTML.js)
  - [실습5_상품 검색 기능 구현](https://github.com/bky373/elice-1st-racer/blob/master/week_08_OpenAPI/04_OpenAPI_Basics/02_OpenAPI_Usage/%EC%8B%A4%EC%8A%B55_%EC%83%81%ED%92%88%20%EA%B2%80%EC%83%89%20%EA%B8%B0%EB%8A%A5%20%EA%B5%AC%ED%98%84.js)

## 비동기 처리

- 복잡한 비동기 처리를 하기 위해서 `.then`을 이용한 콜백 함수를 자주 사용하면 가독성이 나빠진다. (흔히 [콜백 지옥](https://librewiki.net/wiki/콜백_지옥) 이라고 표현한다.)

  ```react
  axios.get(`요청할 url 1`)
    .then(res => axios.get(`요청할 url 2`))
    .then(res => {
      const ps = res.data.map(user => axios.get(`요청할 url 3`));
      ···
    })
    .then(ress => ···)))
    .then(repoArrs => {
      ···
      }
      ···
    })
  ```

- 콜백 지옥을 벗어나기 위해 **`async`**와 **`await`**를 이용할 수 있다. 즉, 콜백 함수와 `.then`을 사용하지 않고 비동기 처리를 할 수 있다.

### Async / Await

- `async`와 `await`에 대해 살펴보기 전에 Promise가 무엇인지 알아보자. **Promise**란 **비동기 처리에서 사용되는 객체**로 Promise가 상태를 관리함으로써 다른 코드가 비동기적으로 실행될 수 있도록 해주는 객체이다. **Axios 역시 Promise를 기반으로** 만들어진 것이다. (Promise에 대한 자세한 설명은 [링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 참고)

- `async`와 `await`을 어떻게 사용해야 하는지 아래 예시를 통해 살펴보자.

  ```react
  // 2초 뒤 Promise 객체를 반환하는 resolveAfter2Seconds 함수와 
  // 해당 함수를 호출하는 asyncCall 함수
  // resolveAfter2Seconds에서는 2초 뒤에 Promise 객체를 반환한다.
  // 여기서 resolve는 코드를 이행하는 것으로 resolved라는 문자열을 반환한다.
  // 코드 실행 후 asyncCall에는 calling을 콘솔창에 출력한 뒤, 2초 후 resolved를 출력한다.
  // async는 함수 이름 부분의 제일 앞에, await는 결과를 기다릴 함수 호출 부분 앞에 작성
  
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  asyncCall();
  ```

- **`async`**는 **해당 함수에서 비동기 처리를 위한 Promise 동작을 한다는 것을 명시**하는 것이고, **`await`**는 **호출되는 함수가 적절한 결과를 반환할 때까지 기다리도록 동작**한다. **실질적인 동작은 `await`**이고, **`awiat`을 사용하기 위해 `async`를 명시해야 한다**.



## 참고할 부분

#### dangerouslySetInnerHTML ([공식 문서](https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml))

- `dangerouslySetInnerHTML`은 **브라우저 DOM에서 `innerHTML`을 사용하기 위한 React의 대체 방법**이다. 일반적으로 코드에서 HTML을 설정하는 것은 [사이트 간 스크립팅](https://ko.wikipedia.org/wiki/사이트_간_스크립팅) 공격에 쉽게 노출될 수 있기 때문에 위험하다. 

- 따라서 React에서 직접 HTML을 설정할 수는 있지만, **위험하다는 것을 상기시키기 위해** `dangerouslySetInnerHTML`을 작성하고 `__html` 키로 객체를 전달해야 합니다. 아래는 예시이다.

  ```react
  function createMarkup() {
    return {__html: 'First &middot; Second'};
  }
  
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
  ```



<br />

---

  ※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>
  **※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**