import React, { useState } from "react";

export function Update(props) {
  const [title, setTitle] = useState(props.data.title);
  const [description, setDescription] = useState(props.data.description);
  return (
    <article>
      <h1>Update</h1>
      <form
        action="topics"
        method="post"
        onSubmit={function (e) {
          props.onUpdate({
            title: e.target.title.value,
            description: e.target.description.value
          });
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={function (e) {
            setTitle(e.target.value);
          }} />
        </p>
        <p>
          <textarea name="description" placeholder="description" value={description} onChange={function (e) {
            setDescription(e.target.value);
          }} />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </article>
  );
}
