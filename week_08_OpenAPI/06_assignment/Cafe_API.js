/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi-assignment?file=src%2FCafes.js
*/


/*
    components/CreateMenu.js 코드
*/
import React from "react";
import "../css/Cafes.css";

function CreateMenu({
  id,
  item,
  description,
  price,
  onChange,
  onCreate,
  resultMessage
}) {
  return (
    <div>
      <p>
        <label htmlFor="id">ID: </label>
        <input onChange={onChange} name="id" id="id" value={id} />
      </p>
      <p>
        <label htmlFor="item">카페 메뉴: </label>
        <input onChange={onChange} name="item" id="item" value={item} />
      </p>
      <p>
        <label htmlFor="description">설명: </label>
        <input
          onChange={onChange}
          name="description"
          id="description"
          value={description}
        />
      </p>
      <p>
        <label htmlFor="price">가격: </label>
        <input onChange={onChange} name="price" id="price" value={price} />
      </p>
      <button onClick={onCreate}>등록하기</button>
      &nbsp;&nbsp;{resultMessage}
    </div>
  );
}

export default CreateMenu;


/*
    components/MenuBoard.js 코드
*/
import React from "react";

function MenuBoard({ isLoading, error, menuList, loadMenuList }) {
  if (isLoading) return (<div><b>로딩중..</b></div>);
  if (error) return <div>메뉴를 불러오는 중 에러가 발생했습니다.</div>;
  return (
    <div>
      {menuList !== "" && (
        <ul>
          {menuList.map(menu => (
            <li key={menu.id}>{menu.item}</li>
          ))}
        </ul>
      )}
      <button onClick={loadMenuList}>메뉴 불러오기</button>
    </div>
  );
}

export default MenuBoard;


/*
    components/MenuDetail.js 코드
*/
import React from "react";
import "../css/Cafes.css";

function MenuDetail({ menu, error }) {
  return (
    <div>
      {error ? (
        <ul>
          <li key="item">카페 메뉴: {error}</li>
          <li key="description">설명: {error}</li>
          <li key="price">가격: {error}</li>
        </ul>
      ) : (
        <ul>
          <li key="item">카페 메뉴: {menu.item}</li>
          <li key="description">설명: {menu.description}</li>
          <li key="price">가격: {menu.price}</li>
        </ul>
      )}
    </div>
  );
}

export default MenuDetail;


/*
    components/SearchMenu.js 코드
*/
import React from "react";
import MenuDetail from "./MenuDetail";
import "../css/Cafes.css";

function SearchMenu({ queryId, searchedMenu, onChange, onSearch, error }) {
  return (
    <div>
      <p>
        <label htmlFor="queryId">검색할 ID를 입력하세요: </label>
        <input
          id="queryId"
          name="queryId"
          value={queryId}
          onChange={onChange}
        />
        <button onClick={onSearch}>검색하기</button>
      </p>
      <MenuDetail menu={searchedMenu} error={error} />
    </div>
  );
}

export default SearchMenu;


/*
    css/Cafes.css 코드
*/
// div {
//   margin: 20px;
//   padding: 10px 20px 30px;
//   border: solid 2px darkgrey;
//   border-radius: 5px;
// }

// h2 {
//   text-align: center;
// }

// button {
//   margin-left: 10px;
//   padding: 5px 8px;
//   color: #1e1e1e;
//   font-weight: 600;
//   background-color: aliceblue;
//   border-radius: 8px;
// }


/*
    index.js 코드
*/
import React from "react";
import ReactDOM from "react-dom";
import Cafes from "./Cafes";

ReactDOM.render(<Cafes />, document.getElementById("root"));


/*
    reducer.js 코드
*/
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        privateMenuList: action.menuList
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        fetchError: action.message
      };
    case "RELOAD_MENULIST":
      return {
        ...state,
        menuList: action.menuList
      };
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case "CREATE_SUCCESS":
      return {
        ...state,
        privateMenuList: state.privateMenuList.concat(action.menu),
        createResultMessage: action.message
      };
    case "CREATE_ERROR":
      return {
        ...state,
        createResultMessage: action.message
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        searchedMenu: action.menu,
        searchError: action.message
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        searchError: action.message
      };
    default:
      throw new Error(`Unsupported action ${action.type}`);
  }
}

export default reducer;


/*
    Cafes.js 코드
*/
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import MenuBoard from "./components/MenuBoard";
import CreateMenu from "./components/CreateMenu";
import SearchMenu from "./components/SearchMenu";
import reducer from "./reducer";

const initialState = {
  isLoading: false,
  fetchError: null,
  privateMenuList: "",
  menuList: "",
  createResultMessage: null,
  searchedMenu: "",
  searchError: null,
  inputs: {
    id: "",
    item: "",
    description: "",
    price: ""
  }
};

// 지시사항에 따라 출력 결과와 동일한 동작을 하는 코드를 작성하세요.
function Cafes() {
  // 과제에서 사용한 API URL
  // 엘리스 플랫폼에서만 적용됨
  const apiUrl = `https://${window.location.hostname}:8190/data`;

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    isLoading,
    fetchError,
    privateMenuList,
    menuList,
    createResultMessage,
    searchedMenu,
    searchError
  } = state;

  useEffect(() => {
    fetchPrivateMenuList();
  }, []);

  async function fetchPrivateMenuList() {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get(apiUrl);
      dispatch({ type: "FETCH_SUCCESS", menuList: response.data });
    } catch (e) {
      dispatch({ type: "FETCH_ERROR", message: e });
    }
  }

  const reloadMenuList = () => {
    dispatch({ type: "RELOAD_MENULIST", menuList: privateMenuList });
  };

  const { id, item, description, price, queryId } = state.inputs;

  const onChange = e => {
    const { name, value } = e.target;
    name === "id" || name === "queryId"
      ? dispatch({ type: "CHANGE_INPUT", name, value: Number(value) })
      : dispatch({ type: "CHANGE_INPUT", name, value });
  };

  const findMenuById = id => privateMenuList.find(menu => menu.id === id);

  const onCreate = () => {
    if (findMenuById(id) !== undefined || id === "") {
      onCreateError();
    } else {
      try {
        const menu = { id, item, description, price };
        axios.post(apiUrl, menu);
        dispatch({
          type: "CREATE_SUCCESS",
          menu,
          message: "등록 성공!!"
        });
      } catch (e) {
        onCreateError();
      }
    }
  };

  const onCreateError = () =>
    dispatch({
      type: "CREATE_ERROR",
      message: "메뉴 등록에 실패했습니다."
    });

  const onSearch = () => {
    const menu = findMenuById(queryId);
    menu === undefined
      ? dispatch({ type: "SEARCH_ERROR", message: "없는 메뉴입니다." })
      : dispatch({
          type: "SEARCH_SUCCESS",
          menu,
          message: null
        });
  };

  return (
    <>
      <h2>안녕하세요 엘리스 카페입니다 :)</h2>
      <MenuBoard
        isLoading={isLoading}
        error={fetchError}
        menuList={menuList}
        loadMenuList={reloadMenuList}
      />
      <CreateMenu
        id={id}
        item={item}
        descripton={description}
        price={price}
        onChange={onChange}
        onCreate={onCreate}
        resultMessage={createResultMessage}
      />
      <SearchMenu
        queryID={queryId}
        searchedMenu={searchedMenu}
        onChange={onChange}
        onSearch={onSearch}
        error={searchError}
      />
    </>
  );
}

export default Cafes;
