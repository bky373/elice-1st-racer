import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';


/* [01 Controlled Component 및 State 끌어올리기] 실습 */


/* [실습1] input 태그 */
class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    //정의한 이벤트를 바인딩합니다.
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  //state의 값을 변경하는 이벤트
  handleChange(event) {
  //setState를 사용하여 입력된 값을 바탕으로 state의 value값을 변경합니다.
    this.setState({value : event.target.value })
    
  }

  //제출 버튼 클릭 시 경고창을 출력하는 이벤트
  handleSubmit(event) {
    alert('경고! ' + this.state.value);
    event.preventDefault();
  }

  render() {
  //input태그에 handleChange이벤트를 등록합니다.
  //input태그에 value를 설정합니다.
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          경고 문구를 입력하세요:        
          <input type="text" value={this.state.value}  onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<InputData />,document.getElementById('root'));


/* [실습2] textarea 태그 */
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '200자 이내의 자기소개서를 입력해주세요'
    };

    //정의한 이벤트를 바인딩합니다.
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //state의 값을 변경하는 이벤트
  handleChange(event) {
    //setState를 사용하여 입력된 값을 바탕으로 state의 value값을 변경합니다.
    this.setState({value : event.target.value})
    
  }

  //제출 버튼 클릭 시 경고창을 출력하는 이벤트
  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
  //form태그에 handleSubmit이벤트를 등록합니다.
  //textarea태그에 handleChange이벤트를 등록합니다.
  //textarea태그에 value를 설정합니다.
    return (
      <form onSubmit={this.handleSubmit}   >
        <h2>당신을 소개하는 글을 200자 이내로 적어주세요.</h2>
           
          <textarea value={this.state.value} onChange={this.handleChange} />
       
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<EssayForm />,document.getElementById('root'));


/* [실습3] select 태그 */
class YearOfBirth extends React.Component {
  constructor(props) {
    super(props);
    // 초기 상태 값을 설정합니다.
    this.state = {value: 1990};

    //정의한 이벤트를 바인딩합니다.
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('태어난 년도: ' + this.state.value);
    event.preventDefault();
  }

  render() {
  //form태그에 handleSubmit이벤트를 등록합니다.
    return (
      <form  onSubmit={this.handleSubmit}  >
        <label>
          태어난 년도를 선택하세요 : 
          <select value={this.state.value} onChange={this.handleChange}>            
            <option value="1960">1960~1969</option>
            <option value="1970">1970~1979</option>
            <option value="1980">1980~1989</option>
            <option value="1990">1990~1999</option>
            <option value="2000">2000~2009</option>
            <option value="2010">2010~2019</option>
            <option value="2020">2020~2029</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(<YearOfBirth />,document.getElementById('root'));


/* [실습4] 다중 입력 */
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      age: 20
    };

    //정의된 이벤트를 바인딩합니다.
    this.handleInputChange = this.handleInputChange.bind(this)
    
  }
    
  handleInputChange(event) {
  //입력된 데이터의 value와 name을 저장합니다.
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //value 와 name을 사용해 입력받은 데이터를 state에 저장합니다.
    this.setState({
        [name] : value
    });
    console.log(this.state.name + ", " + this.state.age);
  }

  render() {
  //이름을 입력받는 태그를 정의합니다.
  //나이를 입력받는 태그를 정의합니다.
    return (
      <form>
        <label>
          이름 :  <input name="name" type="text" onChange={this.handleInputChange} />
       
        </label>
        <br />
        <label>
          나이 :  <input name="age" type="number" onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(<Reservation />, document.getElementById('root'));


/* [실습5] Input Null 값 제어 */
//사용자가 수정할 수 있는 데이터와 수정할 수 없는 데이터를 설정합니다.
const element15 = (
  <fieldset>
  <legend>개인정보 입력란</legend>
  이름 : 
      <input value="김지우" />
      <br/>
      주민등록번호 : 
      <input value="971029-*******"   />
      <br/>
      주소 : 
      <input value={null}   />
      <br/>
      전화번호 : 
      <input value={null}   />
  </fieldset>
)

ReactDOM.render(element15, document.getElementById('root'));


/* [실습6] 원화 입력 컴포넌트 제작 */
class MoneyInput16 extends React.Component {
  constructor(props) {
    super(props);
    // money의 state 초기화 및 이벤트 바인딩합니다.
    this.state = { money: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // 입력받은 원화를 money에 저장합니다.
    this.setState({
        money : event.target.value
    })
  }

  render() {
    const KRW = this.state.money;
    // 원화를 입력받는 아래의 HTML 코드를 반환합니다.
    return (
        <fieldset>
        <legend>환율 계산기</legend>
        원화: <input
            value={KRW}
            onChange={this.handleChange} />
        </fieldset>
    );
  }
}


//정의한 Calculator 컴포넌트를 ReactDOM에 렌더링합니다.
ReactDOM.render(<MoneyInput16 />, document.getElementById('root'));


/* [실습7] 달러 입력 필드 추가 */
const unitNames = {
  K: '원화',
  D: '달러'
};

class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {money: ''};
  }

  handleChange(e) {
    this.setState({money: e.target.value});
  }

  render() {
    const unit = this.props.unit;
    return (
      <fieldset>
        <legend>환율 계산기</legend>
        {unitNames[unit]}: <input
          value={this.state.money}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

//Calculator 클래스 컴포넌트를 생성합니다.
class Calculator extends React.Component {
    render() {
        return (
            <div>
                <MoneyInput unit="K" />
                <MoneyInput unit="D" />
            </div>
        );
    }
}

//정의한 Calculator 클래스를 ReactDOM에 렌더링합니다.
ReactDOM.render(<Calculator />, document.getElementById('root'));


/* [실습8] 환율 변환 함수 작성 */
const unitNames18 = {
  K: '원화',
  D: '달러'
};

//원화를 달러로 변경하는 toDollar 함수를 정의합니다.
function toDollar(krw) {
  return krw * 0.00091;
}

//달러를 원화로 변경하는 toKRW 함수를 정의합니다.
function toKRW(dollar) {
  return dollar * 1098.23;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  return output.toString();
}

class MoneyInput18 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {money: ''};
  }

  handleChange(e) {
    this.setState({money: e.target.value});
  }

  render() {
    const unit = this.props.unit;   
    const money = this.state.money;
    const calcKRW = unit === 'D' ? tryConvert(money, toKRW) : money;
    const calcDollar = unit === 'K' ? tryConvert(money, toDollar) : money;
    return (
      <div>
      <fieldset>
        <legend>환율 계산기</legend>
        {unitNames18[unit]}: <input
          value={money}
          onChange={this.handleChange} />
          
      </fieldset>
      원화: {calcKRW}
      <br/>
      달러: {calcDollar}
      </div>
    );
  }
}

class Calculator18 extends React.Component {
  render() {
    return (
      <div>
        <MoneyInput18 unit="K" />
        <MoneyInput18 unit="D" />
      </div>
    );
  }
}

ReactDOM.render(<Calculator18/>, document.getElementById('root'));


/* [실습9] State 끌어올리기 */
const unitNames19 = {
  K: '원화',
  D: '달러'
};

function toDollar19(krw) {
  return krw*0.00091;
}

function toKRW19(dollar) {
  return dollar*1098.23;
}

function tryConvert19(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  return output.toString();
}

class MoneyInput19 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  // 참조 방식을 props를 참조하는 방식으로 변경하세요.
  handleChange(e) {
    this.props.onMoneyChange(e.target.value);
  }

  render() {
    const unit = this.props.unit;
    const money = this.props.money;
    const calcKRW = unit === 'D' ? tryConvert19(money, toKRW19) : money;
    const calcDollar = unit === 'K' ? tryConvert19(money, toDollar19) : money;

    return (
      <div>
      <fieldset>
        <legend>환율 계산기</legend>
        {unitNames19[unit]}: <input
          value={money}
          onChange={this.handleChange} />
          
      </fieldset>
      원화: {calcKRW}
      <br/>
      달러: {calcDollar}
      </div>
    );
  }
}

class Calculator19 extends React.Component {
  constructor(props) {
    super(props);
    this.handleKRWChange = this.handleKRWChange.bind(this);
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.state = {money: ''};
  }

  // money의 state를 매개변수 money로 설정하세요.
  handleKRWChange(money) {
    this.setState({money: money})
  }
  handleDollarChange(money) {
    this.setState({money: money})
  }

  render() {
    const money = this.state.money;
    return (
      <div>
        {/* 함수와 이벤트를 연결하는 코드를 작성하세요. */}
        {/* Calculator19는 MoneyInput19에게 속성 값들을 넘겨줌*/}
        <MoneyInput19 unit="K" money={money} onMoneyChange={this.handleKRWChange} />
        <MoneyInput19 unit="D" money={money} onMoneyChange={this.handleDollarChange}  />
      </div>
    );
  }
}

ReactDOM.render(<Calculator19 />, document.getElementById('root'));


/* [실습10] 두 필드 동기화 */
const unitNames110 = {
  K: '원화',
  D: '달러'
};

function toDollar110(krw) {
  return krw*0.00091;
}

function toKRW110(dollar) {
  return dollar*1098.23;
}

function tryConvert110(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  return output.toString();
}

class MoneyInput110 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onMoneyChange(e.target.value);
  }

  render() {
    const unit = this.props.unit;
    const money = this.props.money;

    return (
      <fieldset>  
        <legend>환율 계산기</legend>
        {unitNames110[unit]}: <input
          value={money}
          onChange={this.handleChange} />
          
      </fieldset>      
    );
  }
}

class Calculator110 extends React.Component {
  constructor(props) {
    super(props);
    this.handleKRWChange = this.handleKRWChange.bind(this);
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.state = {money: '', unit: 'K'};
  }

  //
  handleKRWChange(money) {
    this.setState({unit: 'K', money});
  }

  handleDollarChange(money) {
    this.setState({unit: 'D', money});
  }

  render() {
    const unit = this.state.unit;
    const money = this.state.money;
    
    //calcKRW와 calcDollar를 계산합니다.
    const calcKRW = unit === 'D' ? tryConvert110(money, toKRW110) : money;
    const calcDollar = unit === 'K' ? tryConvert110(money, toDollar110) : money;
    return (
    //MoneyInput 컴포넌트 호출 시, 제시된 props값을 전달합니다.
      <div>
        <MoneyInput110 unit="K" money={calcKRW} onMoneyChange = {this.handleKRWChange} />
        <MoneyInput110 unit="D" money={calcDollar} onMoneyChange = {this.handleDollarChange} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator110/>, document.getElementById('root'));


/* [실습11] 합성 */
// OutLayer가 부모 컴포넌트, InformationForm이 자식 컴포넌트입니다.
function OutLayer(props) {
  return (
    <div>
      <h4>아래의 항목에 내역을 입력해주세요.</h4>
      <div style={{border: '3px solid green'}}>
        {/* 자식 엘리먼트를 호출합니다. */}
        {props.children}
      </div>
    </div>
  );
}

function InformationForm() {
  return (
    //OutLayer 컴포넌트를 호출하고, 자식 엘리먼트를 작성합니다.
    <div>
      <OutLayer>
        <fieldset>
            이름: <input type="text"/>
            <br/>
            성별: 남<input type="checkbox" />  여<input type="checkbox" />
            <br/>
            전화번호: <input type="text"/>
          </fieldset>
      </OutLayer>
    </div>
  );
}

ReactDOM.render(<InformationForm/>, document.getElementById('root'));


/* [실습12] 특수화 */
function OutLayer2(props) {
  return (
    <div>
      {/*props값을 사용하여 문구를 출력합니다.*/}
      <h4>{props.title}</h4>
      <div style={{border: '3px solid yellow'}}>
        {/*자식 엘리먼트를 호출합니다.*/}
        {props.children}
      </div>
    </div>
  );
}

function FinalTest() {
  return (
      <OutLayer2 title="강의 중간 점검">
        <fieldset>
          <input type="checkbox" />리엑트가 무엇인지 설명할 수 있다.
          <br/>
          <input type="checkbox" />JSX의 문법을 사용하여 렌더링을 할 수 있다.
          <br/>
          <input type="checkbox" />컴포넌트와 props&State를 활용하여 페이지를 제작할 수 있다.
          <br/>
          <input type="checkbox" />컴포넌트 간의 관계 주입을 통해 구조적인 페이지를 제작할 수 있다.
        </fieldset>
      </OutLayer2>
  );
}

ReactDOM.render(<FinalTest/>, document.getElementById('root'));





/* [02 Hook 개요] 실습 */

/* [실습1] React Hook 만들기 */
const User = () => {
  const [nickname, setNickname] = useState('')

  const updateNickname = event => {
    // nickname 변수에 event를 이용해 사용자가 입력한 값을 삽입하세요.
    const nickname = event.target.value
    
    // setNickname의 매개변수로 nickname을 넘겨주세요.
    setNickname(nickname)
  }

  return (
    <div>
      <label>{nickname}</label>
      <br/>
      <input value={nickname} onChange={updateNickname} />
    </div>
  )
}

ReactDOM.render(<User />,document.getElementById('root'));


/* [실습2] 나만의 Hook 만들기 */
const useUser = () => {
  // useState()를 이용해 state 변수를 만드세요.
  const [nickname, setNickname] = useState('')

  const updateNickname = event => {
    const nickname = event.target.value

    setNickname(nickname)
  }

  return [nickname, updateNickname]
}

const User22 = () => {
  // React Hook을 호출하세요.
  const [nickname, setNickname] = useUser('')

  return (
    <div>
      <label>{nickname}</label>
      <br/>
      <input value={nickname} onChange={setNickname} />
    </div>
  )
}

ReactDOM.render(<User22 />,document.getElementById('root'));

serviceWorker.unregister();