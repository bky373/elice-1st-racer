import React, { useEffect, useState } from "react";
import {api_url} from "../env";

export default function Update(props) {
  useEffect(
    function() {
      fetch(api_url + "topics/" + props.id)
      .then(type=>type.json()).then(function(data){
        setTitle(data.title);
        setDescription(data.description);
      })
    },[])

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
