import React, { useState, useEffect } from "react";
import "./style.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Create from "./components/Create";
import Update from "./components/Update";
import Control from "./components/Control";
import Read from "./components/Read";

import {api_url} from "./env";

export default function App() {
  var [mode, setMode] = useState("WELCOME");
  var [selectedId, setSelectedId] = useState(1);
  var [nextId, setNextId] = useState(4);
  var [topics, setTopics] = useState([]);
  // 첫 번째 인자는 사이드 이펙트에 해당하는 것들(대표적인 것: 서버와 통신하는 것, html 태그를 바꾸는 것)
  // useEffect는 컴포넌트가 실행될 때마다(렌더링 될 때마다) 실행됨
  // 실행을 딱 한 번만 하기 위해선 빈 배열([])을 넣어준다  
  function refreshNav(){
    fetch(api_url+'topics')
    .then(function(type){return type.json();})
    .then(function(result){
      console.log('result', result);
      setTopics(result);
    })
  }

  useEffect(function(){
    refreshNav();
  }, []);
  var article = null;
  if (mode === "WELCOME") {
    article = <Article title="Welcome" description="Hello, WEB" />;
  } else if (mode === "READ") {
    article = <Read id={selectedId}/>
  } else if (mode === "CREATE") {
    article = (
      <Create
        onCreate={function(data) {
          fetch(api_url + "topics", {
            method: "POST",
            body: JSON.stringify({
              title: data.title,
              description: data.description
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(type=>type.json()).then(function(result){
            refreshNav();
            setMode('READ');
            setSelectedId(result.id);
          });
        }}
      />
    );
  } else if (mode === "UPDATE") {
    var selectedTopic = null;
    for (var i = 0; i < topics.length; i++) {
      if (topics[i].id === selectedId) {
        selectedTopic = topics[i];
        break;
      }
    }
    article = (
      <Update
        id={selectedId}
        onUpdate={function(data) {
          fetch(api_url+"topics/"+id, {
            method:"PUT",
            body: JSON.stringify({
              title: data.title,
              description: data.description
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(type=>type.json())
          .then(() => {
            refreshNav()
            setMode('READ');
          })
        }}
      />
    );
  }
  return (
    <div>
      <Header
        onChangeMode={function() {
          setMode("WELCOME");
        }}
      />
      <Nav
        data={topics}
        onChangeMode={function(topic_id) {
          setMode("READ");
          setSelectedId(topic_id);
        }}
      />
      {article}
      <Control
        onChangeMode={function(mode) {
          if (mode === "DELETE") {
            var newTopics = [];
            for (var i = 0; i < topics.length; i++) {
              if (topics[i].id === selectedId) {
                continue;
              } else {
                newTopics.push(topics[i]);
              }
            }
            setTopics(newTopics);
            mode = "WELCOME";
          }
        }}
      />
    </div>
  );
}
