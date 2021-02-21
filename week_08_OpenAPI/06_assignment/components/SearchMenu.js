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