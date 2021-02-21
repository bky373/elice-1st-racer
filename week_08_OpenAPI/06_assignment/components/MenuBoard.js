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