## HTML / CSS / JavaScript

### HTML 내용 정리

- **HTML** :  **HyperText Markup Language**의 줄임말로 우리가 보고 있는 **웹페이지의 구조**를 만들 때 쓰는 <u>마크업(Markup Language) 언어</u>

  - **예)**

    ```html
    <열린태그 속성 = "속성값"> 컨텐츠 </닫힌태그>
    ```

  - **태그명** : HTML이 갖고 있는 고유의 기능 <u><열린태그></닫힌태그></u> 형태로 입력

  - **컨텐츠** : 열린 태그와 닫힌 태그 사이에 있는 내용물

  - **속성** : HTML 태그가 갖고 있는 **추가 정보**

  - **속성값** : 어떤 역할을 수행할지 **구체적인 명령**을 진행하는 것

#### **HTML 기본 태그**

```html
<!DOCTYPE html> :  HTML 문서가 HTML5라는 신조어로 구성되어 있다는 의미
<html> </html>  : HTML 문서의 **시작과 끝**을 의미, 모든 HTML 태그들은 <html> 태그 안쪽에 입력 
<head> </head>  : 웹사이트의 간단한 요약 정보를 담는 영역, 웹사이트에서 노출되지 않는 정보
<meta charset="UTF-8"> : character setting의 약자를 나타내는 문자 코드, 모든 문자를 웹 브라우저에서 깨짐 없이 표시하겠다는 의미
<body> </body>  : 웹사이트에서 **눈에 보이는 정보**를 담는 영역
<ul> </ul> : Unordered list의 약자로, 순서가 없는 리스트 생성, 메뉴 버튼을 만들 때 사용되는 태그 (각각의 우선순위가 동급), Y축 정렬 (X축 정렬은 css로)` 
<ol> </ol> : Ordered list의 약자로, 순서가 있는 리스트 생성, Y축 정렬 (X축 정렬은 css로)
<a> </a> : href="연결할 웹페이지의 URL 주소", target="웹페이지를 연결하는 방식"


<!-- 회사 로고를 만드는 예시 --!>
<h1> : 회사 로고는 페이지에서 가장 중요한 정보이므로 (페이지당) 단 하나 뿐인 h1 안에 넣어준다. 
	<a>
		<img>
	</a>
</h1>
```

- **UTF-8** : [유니코드](https://ko.wikipedia.org/wiki/유니코드)를 위한 가변 길이 [문자 인코딩](https://ko.wikipedia.org/wiki/문자_인코딩) 방식 중 하나이다. 모든 유니코드 문자를 지원한다 
- **유니코드(Unicode)** :  전 세계의 모든 문자를 [컴퓨터](https://ko.wikipedia.org/wiki/컴퓨터)에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 [표준](https://ko.wikipedia.org/wiki/표준)이다. 유니코드의 목적은 현존하는 [문자 인코딩](https://ko.wikipedia.org/wiki/문자_인코딩) 방법들을 모두 유니코드로 교체하려는 것이며, 이는 비교적 최근의 기술인 [XML](https://ko.wikipedia.org/wiki/XML), [자바](https://ko.wikipedia.org/wiki/자바_(프로그래밍_언어)), 그리고 최신 [운영 체제](https://ko.wikipedia.org/wiki/운영_체제) 등에서도 지원하고 있다 ([출처](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C))

---

#### **구조를 잡을 때 사용하는 태그**

```html
<header> </header> : 웹사이트의 머리글을 담는 공간
<nav> </nav> : 메뉴 버튼을 담는 공간 <ul>, <li>, <a>와 함께 사용
<!-- 일반적인 header 틀 --!>
<header> <!-- 상단 영역 -->
	<h1> <img src="elice_logo.png" alt="엘리스 로고"> </h1>
	<nav> <!-- 메뉴 버튼 영역 -->
		<ul>
			<li> <a> 홈 </a> </li>
			<li> <a> 전체 목록 </a> </li>
		</ul>
	</nav>
</header>
<!-- -->

<main> </main> : 웹사이트의 본문을 담는 공간, IE(Internet Explore)에서는 지원하지 않으므로 role="main" 속성 필수 입력
<article> </article> : 메인 안의 주요 이미지나 텍스트 정보를 담고 구역을 설정하는 공간, 태그 내에 구역을 대표하는 타이틀 <h#> 태그가 존재해야 한다 (구글 웹사이트에 노출시킬 때 필요힘)
<!-- 일반적인 header 틀 --!>
<main role="main"> <!-- 본문 영역 -->
	<article> <!-- 정보 영역 -->
        <h#> ... </h#>
        <p> ... </p>
    ...
    </article>
</main>
<!-- -->

    
<footer> : 가장 하단에 들어가는 정보를 표기할 때 사용
<div> : 임의의 공간을 만들 때 사용, 애매한 공간을 표현할 때 사용
<footer> <!-- 하단 영역 -->
	<div> <!-- 엘리스 정보 -->
        <p>주소: 대전광역시 유성구 문자로 193 KAIST</p>
        <p>이메일: contact@elice.io</p>
    </div>
    <div> <!-- 전자상거래소비자보호법 필수 정보 -->
        <p>사업자등록번호: 000-00-00000 | 대표: 엘토끼</p>
        <p>통신판매업신고번호: 제0000-토끼굴-000호</p>
    </div>
</footer>

```

---

#### **HTML 태그의 두 가지 성격**

 - **Block 요소** : **Y축 정렬** 형태로 출력 (**줄바꿈 현상** 나타남), **공간을 만들 수 있고**(= width, height 설정이 가능), **상하 배치 작업 가능** - 예) div, h#
 - **Inline 요소** : **X축 정렬** 형태로 출력 (**한 줄에 출력**), 공간을 만들 수 **없고**(= width, height 설정이 불가능), 상하 배치 작업 **불가능**

---

### CSS 내용 정리

- **CSS** : **Cascading Style Sheet**의 줄임말로 웹 페이지의 배경색, 폰트 등 **다양한 디자인적인 요소**를 정할 때 사용된다

  - **예)**

  - ```css
    선택자 { 속성: 속성값; }
    ```

  - **선택자** : 디자인을 적용할 HTML 영역

  - **속성** : 어떤 디자인 요소인지 정의

  - **속성값** : 어떤 디자인을 그릴지 구체적으로 명령. 세미콜론(;) 필수 입력

### CSS 선택자

- **Type Selector** : **특정 HTML 태그**에 스타일을 적용
- **Class Selector** : **클래스 이름**으로 특정 위치에 스타일을 적용
- **ID Selector** : **ID**를 이용하여 스타일을 적용

### 캐스케이딩

- CSS의 우선순위를 결정하는 세 가지 요소
  1. **순서** : **나중에 적용**한 속성값의 우선순위가 높음
  2. **디테일** : **더** **구체적으로** 작성된 선택자의 우선순위가 높음
  3. **선택자** : **style > id > class > type** 순으로 우선순위가 높음

###  CSS 주요 속성 (일부만)

- **font**
  - **font-family (글꼴)** :  브라우저마다 지원하는 폰트가 다름. 입력한 순서대로 적용. **sans-serif**는 마지막 디폴트 값(모든 브라우저에서 지원하기 때문에 설정해두는 게 좋음)
  - **font-weight (글자 두께)** : bold 등 사용 or 100~900 사이의 숫자를 입력할 수도 있음, 숫자가 클수록 두꺼워짐
  - **font-style (글자 기울기)** : italic 등 사용
- **background**
  - **background-image** : 속성값 -> url(이미지 경로.(확장명 포함))
  - **background-repeat**
    - x축으로 반복 :  repeat-x
    - y축으로 반복 : repeat-y
    - 반복하지 않음 : no-repeat
    - 기본값 : repeat
  - **background-position**: 공간 안에서 이미지의 좌표를 변경할 때, top, bottom, center, left, right, 100px, 50% 등
  - <u>속성값 한 줄에 입력시 순서는 무관함</u> (border도 마찬가지)

---

### JavaScript 내용 정리

- **JavaScript** : 스크립트 언어로 웹페이지에서 버튼을 클릭하면 어떤 동작을 할 것인지와 같은 **동작**을 구성할 때 사용되는 언어

### 웹사이트 제작시 고려 사항

1. **웹 표준** : 웹 사이트를 작성할 때 따라야 하는 공식 표준이나 기술 규격
2. **웹 접근성** : 장애의 여부와 상관 없이 모두가 웹사이트를 이용할 수 있게 하는 방식
3. **크로스 브라우징** : 모든 브라우저 또는 기기에서 사이트가 제대로 작동하도록 하는 기법

### 그 외 참고하기

- **Host** : 네트워크가 연결된 컴퓨터, Client와 Server를 아우르는 말
- **Client** : Host 중 요청하는 컴퓨터
- **Server** : Host 중 클라이언트의 요청에 응답하는 컴퓨터
- **Web Hosting** : 네트워크에 접속된 컴퓨터들 특히 웹 서비스에 특화된 컴퓨터를 빌려주는 사업을 가리킨다, 우리나라의 대표적인 업체는 Cafe24, Gabia 등이 있다, **Cloud(클라우드)**의 본질이 결국 hosting이다. 

<br>
---

  ※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>
  **※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**