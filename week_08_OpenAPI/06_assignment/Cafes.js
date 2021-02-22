/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi-assignment?file=src%2FCafes.js

    < 과제시 사용한 API URL > -엘리스 플랫폼에서 작동
        https://${window.location.hostname}:8190/data

    < API 구조 확인 >
        mock/db.json 참고
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

  async function onCreate() {
    if (findMenuById(id) !== undefined || id === "") {
      onCreateError();
    } else {
      try {
        const menu = { id, item, description, price };
        const response = await axios.post(apiUrl, menu);
        dispatch({
          type: "CREATE_SUCCESS",
          menu: response.data,
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
        queryId={queryId}
        searchedMenu={searchedMenu}
        onChange={onChange}
        onSearch={onSearch}
        error={searchError}
      />
    </>
  );
}

export default Cafes;
