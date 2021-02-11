/*
    App.js 코드
*/
import React from "react";
import "./style.css";
function Header() {
  return (
    <header>
      <h1>WEB</h1>
    </header>
  );
}
function Nav(props) {
  var tag = []
  for (let i=0; i<props.data.length; ++i){
        var d = props.data[i]
        tag.push(<li><a href={"/"+d.id}>{d.title}</a></li>)  
  }
  return (
    <nav>
      <ul>
        {tag}
      </ul>
    </nav>
  );
}

/* 중급자들은 map을 선호합니다. 
function Nav(props) {
  return (
    <nav>
      <ul>
        {props.data.map(function(e) {
          return (
            <li>
              <a
                href={"/" + e.id}
              >
                {e.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
*/

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.description}
    </article>
  );
}
export default function App() {
  return (
    <div>
      <Header />
      <Nav
          data={[
            { id: 1, title: "html", description: "html is..." },
            { id: 2, title: "css", description: "css is..." },
            { id: 3, title: "js", description: "js is..." }
          ]}
      />
      <Article title="Welcome" description="Hello, WEB!" />
    </div>
    
  );
}
