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