import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

/* [02 State & 생명주기] 실습 */


/* [실습1] 컴포넌트 합성 */

//함수 컴포넌트를 사용하여 Subject컴포넌트를 정의합니다.
function Subject(props) {
    return <h3>React를 이해하기 위해선느 {props.name}을(를) 알아야 합니다.</h3>
}
  
//Curriculum 컴포넌트를 정의합니다.
function Curriculum() {
    return (
        <div>
            <Subject name ="HTML" />
            <Subject name ="CSS" />
            <Subject name ="JavaScript" />
        </div>
    );
}
  
//Curriculum을 ReactDOM과 렌더링합니다.  
ReactDOM.render(<Curriculum />, document.getElementById('root'));


/* [실습2] 컴포넌트 추출 */

//user의 정보(이름, 프로필사진) 출력 컴포넌트
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <div>이름: {props.user.name}</div>
            <div>나이: {props.user.age}</div>
        </div>
    );
}

//코멘트 출력 컴포넌트
function Comment(props){
    return(
        <div className="Comment">문구: {props.text}</div>
    );
}

//문구 출력 컴포넌트
function Profile(props) {
    return (
        <div className="Profile">
            <UserInfo user= {props.author} />
            <Comment text= {props.text} />
        </div>
    );
}


//데이터 저장 변수
const comment = {
    text: 'I hope you enjoy learning React!',
    author: {
        name: '엘리스 토끼',
        age: '12',
    },
};

const element12 = (
    <Profile 
        text={comment.text}
        author={comment.author}
    />
);

ReactDOM.render(element12, document.getElementById('root'));



/* [실습3] props란 */

//프로필 출력 컴포넌트
function Profile13(props){
    return(
        <div>
            //name을 출력합니다.
            <h2>이름: {props.user.name}</h2>
            //age를 출력합니다.
            <h2>나이: {props.user.age}</h2>
            //gender를 출력합니다.
            <h2>성별: {props.user.gender}</h2>
        </div>
    );
  }
  
//데이터 저장 변수
const data = {
    name: 'Joshi',
    age: '25',
    gender: '남'
};

  
const element13 = (
//Profile 컴포넌트를 호출합니다.
//data의 값을 props로 제공합니다.
    <div>
        <Profile13 user={data} />
    </div>
);  

ReactDOM.render(element13, document.getElementById('root'));
  



/* [02 State&생명주기] 실습 */

/* [실습1] 컴포넌트 재사용을 위한 캡슐화 */

//현재시간을 출력하는 컴포넌트
//현재시간의 props를 받아 출력합니다.
function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>현재 시간: {props.date.toLocaleTimeString()}    </h2>
      </div>
    );
  }
  
  //매초 마다 호출되는 함수
function tick() {
//Clock 컴포넌트를 호출합니다.
    const element = (
            <div>
                <Clock date={new Date()} />
            </div>
    );

    //ReactDOM에 element을 렌더링합니다.
    ReactDOM.render(element, document.getElementById('root'));
}
  
// setInterval(tick, 1000); // 위 예제 확인 시 주석 해제할 것


/* [실습2] 함수 컴포넌트를 클래스로 변환 */

//클래스 컴포넌트를 사용하여 Clock컴포넌트를 작성합니다.
class Clock22 extends React.Component {
    render() {
        return (
            <div>
               <h1>Hello, world!</h1>
               <h2>현재 시간: {this.props.date.toLocaleTimeString()}</h2>
           </div>
        );
    }
}


//매초 마다 호출되는 함수
function tick22() {
    //Clock 컴포넌트를 호출하고 현재 시간을 props로 넘겨줍니다.
    const element = (
        <div>
               <Clock22 date={new Date()} />
           </div>
 );
 ReactDOM.render(
     element,
     document.getElementById('root')
     );
    }
    
// setInterval(tick22, 1000); // 위 예제 확인 시 주석 해제할 것
    

/* [실습3] 클래스에 로컬 State 추가 */

//현재시간을 출력하는 컴포넌트
class Clock23 extends React.Component {
    //constructor()메소드를 추가합니다.
    constructor(props){
      super(props);
      this.state = {date: new Date()}; 
    }
  
  
    //props를 state로 변경합니다.
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}
  
//Clock 컴포넌트를 호출합니다.
const element23 = (
        <div>
            <Clock23 />
        </div>
    );

ReactDOM.render(element23, document.getElementById('root'));


/* [실습4] 생명주기 메서드 추가 */

class Clock24 extends React.Component {
    constructor(props) {
      console.log("constructor() 호출")
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      console.log("componentDidMount() 호출")
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      console.log("componentWillUnmount() 호출")
      clearInterval(this.timerID);
    }
  
    tick() {
      console.log("tick() 호출")
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      console.log("render() 호출")
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
}
  
ReactDOM.render(<Clock24 />, document.getElementById('root'));


/* [실습5] State 업데이트 올바르게 사용하기 */
class InputUserData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "엘리스 토끼",
        job: "developer"
      };
    }
  
    //name 데이터를 변경하는 메소드
    onNameHandler = event => {
      // setState를 사용해 name 데이터 업데이트 기능을 구현합니다.
      this.setState({
          name : event.target.value
      })  
    };
  
    //job 데이터를 변경하는 메소드
    onJobHandler = event => {
      //setState를 사용해 job 데이터 업데이트 기능을 구현합니다.
      this.setState({
          job: event.target.value
      })
    };
  
  
    onClickEventHandler = () => {
      alert("이름: " + this.state.name + ", 직업: " + this.state.job);
    };
  
    render() {
      const { name, job } = this.state;
      return (
        <div>
          <div>
            name: <input type="text" value={name} onChange={this.onNameHandler} />
          </div>
          <div>
            job: <input type="text" value={job} onChange={this.onJobHandler} />
          </div>
          <button type="button" onClick={this.onClickEventHandler}>
            저장
          </button>
        </div>
      );
    }
}
  
ReactDOM.render(<InputUserData/>, document.getElementById('root'));
  





/* [03 이벤트처리와 조건부 렌더링 및 Key 설정] 실습 */


/* [실습1] 리액트에서의 이벤트 */
function ActionLink31() {
    //이벤트를 등록합니다.
    function handleClick(){
        alert('버튼이 클릭되었습니다.')
    }
    //a 태그에 이벤트를 등록합니다.
    return (
        <a href="#" onClick={handleClick} >
        Click me
      </a>
    );
}

ReactDOM.render(<ActionLink31 />, document.getElementById('root'));


/* [실습2] 하이퍼링크 Default 설정 */
class Toggle32 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        //정의한 이벤트를 바인딩합니다.
        this.handleClick = this.handleClick.bind(this);
  }

    //handleClick 이벤트를 정의합니다.
    handleClick() {
        this.setState({
            isToggleOn: false
        })
    }

  render() {
    return (
      //button 태그에 handleClick이벤트를 등록합니다.
      <button onClick={this.handleClick} >
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(<Toggle32 />, document.getElementById('root'));


/* [실습3-1] consturctor에서 이벤트 바인딩 */
class EventClass331 extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        message: 'Hello'
      }
      // 이벤트 바인딩을 하세요.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({
        message: 'Goodbye!'
      })
    }
  
    render() {
      return (
        <div>
          <div>{this.state.message}</div>
          <button onClick={this.handleClick}>Click
           </button>
        </div>
      )
    }
}
  
ReactDOM.render(<EventClass331 />, document.getElementById('root'));
  

/* [실습3-2] 메소드에서 이벤트 바인딩 */
class EventClass332 extends React.Component {
    constructor(props) {
      super(props);
      //정의한 이벤트를 바인딩합니다.
      this.handleClick = this.handleClick.bind(this)
      
    }
  
    //handleClick 이벤트를 정의합니다. 인자값을 받아 alert()을 출력합니다.
    handleClick(data) {
      alert('전달받은 인자값: ' + data)
    }
  
  
    render() {
      var data = "ABCDEFG"
      return (
        //data값을 인자값으로 제공하는 이벤트 핸들러를 작성합니다. 
        <button onClick={this.handleClick.bind(this, data)}>
          버튼을 눌러주세요!
        </button>
      );
    }
  }
  
ReactDOM.render(<EventClass332 />, document.getElementById('root'));


/* [실습4] 엘리먼트 변수에 따른 조건부 렌더링 */
//login 상태 반환
function LoginState() {
    return (
      <h2>로그인 되었습니다.</h2>
    );
  }
  
  //logout 상태 반환
  function LogoutState() {
    return (
        <h2>로그아웃 되었습니다. </h2>
    );
  }
  
  //props의 값에 따라 반환할 컴포넌트를 결정합니다.
  function State(props) {
    const data = props.data;
    if (data) {
      return <LoginState />
    } else {
      return <LogoutState />
    }   
}  
  
class ClickEvent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    //handleClick 이벤트를 바인딩합니다.
    this.handleClick = this.handleClick.bind(this)
    
    }

    //클릭 이벤트를 정의합니다.
    handleClick = () =>{
        this.setState({
            isToggleOn : !this.state.isToggleOn
        });
    }

    render() {
        return (
        
            //handleClick이벤트 핸들러를 추가합니다.        
            <button onClick={this.handleClick} >
                {<State data={this.state.isToggleOn} />}
            </button>  
        );
    }
}

ReactDOM.render(<ClickEvent />, document.getElementById('root'));


/* [실습5] 논리 연산자 (&&) 활용 */
function Check(props){
    //props에서 제공하는 데이터를 변수에 저장합니다.
    const password = props.name;
  
    return(
      //논리연산자를 사용하여 비밀번호 이상 여부를 검사합니다.
      //비밀번호가 7자 이상이고, #이 포함되어있으면 <h2>태그의 문구를 출력합니다.
      <div>
          {password.length >= 7 && password.includes("#") &&
              <h2>올바른 비밀번호입니다.</h2>
          }
      </div>    
    )
  }
  
  class PasswordForm extends React.Component {
    state = {
      name: ''
    }
    handleChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
    render() {
      return (
        <form>
          비밀번호: <input
            placeholder="비밀번호를 입력하세요"
            value={this.state.name}
            onChange={this.handleChange}
          />
          {<Check name={this.state.name}/>}
        </form>
      );
    }
}
  
ReactDOM.render(<PasswordForm />, document.getElementById('root'));


/* [실습6] 조건부 연산자 (?) 활용 */
function Check46(props){
    //Check의 props를 변수에 저장합니다.
    const data = props.num;
    return(
        <div>
            {/*조건에 따라 적절한 결과값을 출력합니다.*/}
            {/*출력 태그는 <h2>태그를 이용합니다.*/}
            { parseInt(data, 10) > 0 ? (<h2>양수입니다.</h2>) : (<h2>양수가 아닙니다.</h2>) }
            
        </div>
        )
}
    
class InputData extends React.Component {
    state = {
        num: ''
    }
    handleChange = (e) => {
        this.setState({
          num: e.target.value
        })
      }
    render() {
        return (
          <form>
            숫자를 입력하세요: <input
              value={this.state.num}
              onChange={this.handleChange}
            />
            
            {<Check46 num={this.state.num}/>}
          </form>
        );
    }
}
    
ReactDOM.render(<InputData />,document.getElementById('root'));


/* [실습7] map을 활용한 key 설정 */
class IterationSample extends React.Component {
    state = {
      todo: [
       '꾸준히 운동하기', 
       '영어 공부하기', 
       '미니 프로젝트 진행하기']
    }
  
    render() {
    
    //todoList를 정의합니다.
    const todoList = this.state.todo.map((x) => <li key={x.id}> {x} </li>);
      
    return (
        <div>
          <h2>신년 목표</h2>
          <ul>
            {/* todoList를 출력합니다. */}
            {todoList}
            
          </ul>
        </div>
      );
    }
}

ReactDOM.render(<IterationSample />, document.getElementById('root'));


/* [실습8] key로 컴포넌트 추출하기 */
const reactCurriculum = [
    {id: 1, title: '리액트란?', detail: '리액트가 무엇인지 알고 리액트 앱을 구동해봅니다.'},
    {id: 2, title: 'jsx 문법 및 렌더링', detail: '리액트의 사용성을 높여주는 JSX에 대해 배우고 React DOM에 렌더링해봅니다.'},
    {id: 3, title: '컴포넌트와 Props&State', detail: '컴포넌트 유형에 대해 배우고 관련하여 주요한 개념인 Props와 State에 대해 배워봅니다.'},
    {id: 4, title: '이벤트처리와 조건부 렌더링 및 Key 설정', detail: '리액트에서 이벤트를 처리하는 방식을 알고 조건에 따른 렌더링 방법과 Key 설정을 배워봅니다.'},
    {id: 5, title: '제어 컴포넌트 및 State 끌어올리기', detail: '리액트 고유성을 위한 key 설정 및 사용자가 제출한 폼에 따른 제어 기술을 배워봅니다.'}
  ];
  
  function CurriculumPage(props) {
    //React의 목차를 출력하는 contents를 정의합니다.
    const contents = props.curriculum.map((curriculum) => <li key={curriculum.id}>{curriculum.title}</li>);
    
    
    
    //React의 목차 별 세부 내용을 출력하는 subcontents를 정의합니다.
    const subcontents = props.curriculum.map((curriculum) => 
      (   
          <div key={curriculum.id}>
              <h3>{curriculum.title}</h3>
              <p>{curriculum.detail}</p>
          </div>
      ));  
    
    return (
      <div>
        <h2>React과목 커리큘럼</h2>
        <ul>      
          {contents}
        </ul>
        <hr />
        {subcontents}
      </div>
    );
}
  
ReactDOM.render(
    <CurriculumPage curriculum={reactCurriculum} />,
    document.getElementById('root')
);

  
/* [실습9] JSX에 map() 포함시키기 */
const reactCurriculum39 = [
    {id: 1, title: '리액트란?', detail: '리액트가 무엇인지 알고 리액트 앱을 구동해봅니다.'},
    {id: 2, title: 'jsx 문법 및 렌더링', detail: '리액트의 사용성을 높여주는 JSX에 대해 배우고 React DOM에 렌더링해봅니다.'},
    {id: 3, title: '컴포넌트와 Props&State', detail: '컴포넌트 유형에 대해 배우고 관련하여 주요한 개념인 Props와 State에 대해 배워봅니다.'},
    {id: 4, title: '이벤트처리와 조건부 렌더링 및 Key 설정', detail: '리액트에서 이벤트를 처리하는 방식을 알고 조건에 따른 렌더링 방법과 Key 설정을 배워봅니다.'},
    {id: 5, title: '제어 컴포넌트 및 State 끌어올리기', detail: '리액트 고유성을 위한 key 설정 및 사용자가 제출한 폼에 따른 제어 기술을 배워봅니다.'}
  ];
  
function CurriculumPage39(props) {
    
    return (
      <div>
        <h2>React과목 커리큘럼</h2>
        <ul>      
          //JSX와 map()을 활용하여 reactCurriculum의 title을 출력하는 코드를 작성합니다.
          {props.curriculum.map((x) => <li key={x.id}>{x.title}</li>)};
        </ul>
        <hr />
          //JSX와 map()을 활용하여 reactCurriculum의 title과 detail을 출력하는 코드를 작성합니다.
          {props.curriculum.map((x) => (
              <div key={x.id}>
                  <h3>{x.title}</h3>
                  <p>{x.detail}</p>
              </div>
              ))   
          };
      </div>
    );
}
  
ReactDOM.render(
<CurriculumPage39 curriculum={reactCurriculum39} />,
document.getElementById('root')
);

serviceWorker.unregister();