/*
    App.js 코드
*/
import React, { useState } from "react";
import "./style.css";
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function(e) {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          WEB
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>
        {props.data.map(topic => {
          return (
            <li>
              <a
                data-id={topic.id}
                href={"/${topic.id}"}
                onClick={function(e) {
                  e.preventDefault();
                  // console.log(e.target.dataset.id);
                  props.onChangeMode(Number(e.target.dataset.id));
                }}
              >
                {topic.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.description}
    </article>
  );
}
export default function App() {
  let [mode, setMode] = useState("WELCOME");
  let [selectedId, setSelectedId] = useState(null);
  const topics = [
    { id: 1, title: "html", description: "html is..." },
    { id: 2, title: "css", description: "css is..." },
    { id: 3, title: "js", description: "js is..." }
  ];
  let articleTag = null;
  if (mode === "WELCOME") {
    articleTag = <Article title="Welcome" description="Hello WEB!!" />;
  } else if (mode === "READ") {
    articleTag = (
      <Article
        title={topics[selectedId - 1].title}
        description={topics[selectedId - 1].description}
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
        onChangeMode={function(topicId) {
          setMode("READ");
          // console.log(topicId)
          setSelectedId(topicId);
        }}
      />
      {articleTag}
    </div>
  );
}
