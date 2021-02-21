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