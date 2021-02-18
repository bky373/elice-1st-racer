## OpenAPI 학습내용 정리

### API

- API는 **Application Programming Interface**의 줄임말로 다양한 응용 프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스

### OpenAPI

- **OpenAPI(OpenApplication Programming Interface)** : 누구나 사용할 수 있도록 공개되어 개발자에게 사유 응용 소프트웨어나 웹서비스에 프로그래밍적인 권한을 제공하는 API. 즉, **말그대로 누구나에게나 공개된 API**
- **예시**
  - **공공 데이터 포털** : https://www.data.go.kr/tcs/dss/selectDataSetList.do
  - **카카오 오픈 API** : https://developers.kakao.com/
  - **네이버 오픈 API** : https://developers.naver.com/

#### OpenAPI를 사용하는 이유

- OpenAPI를 이용하여 개발하는 방법은 어느 정도 **획일화** 되어있기 때문에 다른 사람들과 **협업하기에 편리**합니다. 또한, 코드를 작성하는 **시간이 절약**되어 개발 **비용이 절감**되는 장점이 있다
- OpenAPI를 사용하면 API 테스트를 통한 **품질 보장**이 가능하고 **사용자와의 상호작용을 중요시 하는 서비스를 개발**할 수 있다

#### OpenAPI를 제공하는 이유

- 많은 기업 및 단체들이 왜 API를 Open할까?
  - 기업들은 OpenAPI를 고객들에게 제공함으로써 **사용자가 서비스나 상품을 이용하는 것에 대한 장벽을 허물게 된다**.이는 고객이 자신의 요구에 적합한 방식으로 서비스를 이용할 수 있다는 것을 의미하며 기업은 **고객과의 관계를 강화**할 수 있게 된다. 
  - 개발자들이 기업의 API를 연구하고 통찰하여 새로운 서비스를 만들어내면, 기업은 그것을 참고하여 고객이 원하는 서비스가 무엇인지 더 고민해볼 수 있다.

### CRUD

- **CRUD**는 **Create, Read, Update, Delete**의 줄임말이며, 각각은 아래와 같이 매칭된다.
  - **Create(생성)** : **POST**
  - **Read(조회)** : **GET**
  - **Update(수정)** : **PUT**
  - **Delete(삭제)** : **DELETE**
- **PUT과 DELETE**는 REST 기반 API 프로그램에서 데이터베이스에 저장된 내용을 다룰 때 사용되는 메서드이므로, **OpenAPI를 다룰 때는 사용할 일이 거의 없다.**

## Axios

- **Axios**는 **웹브라우저와 Node.js를 위한 HTTP 비동기 통신 라이브러리**이다. 쉽게 말해 백엔드와 프론트엔드간 통신을 쉽게 하기 위해 사용되는 것으로Ajax처럼 사용되는 것이다.
- React에서 OpenAPI를 이용한 통신을 할 때 Axios를 주로 사용한다.
- Axios는 **Promise를 기반**으로 만들어진 라이브러리이다. **Promise**는 **자바스크립트 ES6**에서 **비동기처리를 위해 주로 사용되는 객체**이다.

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





</br>

---

  ※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>
  **※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**