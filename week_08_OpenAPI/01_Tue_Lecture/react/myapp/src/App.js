import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header"
import Nav from "./components/Nav"
import Article from "./components/Article"
import Create from "./components/Create"
import { Update } from "./components/Update";
import { Control } from "./components/Control";

export default function App() {
  const [mode, setMode] = useState('WELCOME');
  const [selectedId, setSelectedId] = useState();
  const [topics, setTopics]= useState([
    { id: 1, title: "html", description: "html is..." },
    { id: 2, title: "css", description: "css is..." },
    { id: 3, title: "js", description: "js is..." }
  ]);

  let article = null;
  if (mode === 'WELCOME') {
    article = <Article title="Welcome" description="Hello, WEB" />
  } else if (mode === 'READ') {
    const selectedTopic = topics.filter(topic => topic.id === selectedId)[0];
    article = <Article title={selectedTopic.title} description={selectedTopic.description} />
  } else if (mode === 'CREATE') {
    article = <Create onCreate={function(data) {
      const newTopics = [...topics];
      const nextId = topics.length + 1;
      newTopics.push({
        id : nextId,
        title : data.title,
        description : data.description
      });
      setTopics(newTopics);
      setSelectedId(nextId);
      setMode('READ');
    }} />
  } else if (mode === 'UPDATE') {
    const topic = topics[selectedId-1];
    article = <Update 
      data={{'title' : topic.title, 'description' : topic.description}} 
      onUpdate={function(data) {
        const newTopics = [...topics];
        newTopics.splice(selectedId-1, 1, {id: selectedId, title: data.title, description: data.description})
        setTopics(newTopics);
        setMode('READ');
    }} />
  }
    
  return (
    <>
      <Header onChangeMode={function() {
        setMode('WELCOME');
      }}/>
      <Nav 
        onChangeMode={function(topic_id) {
          setSelectedId(topic_id)
          setMode("READ");
        }} 
        data={topics}/>
      {article}
      <Control onChangeMode={function(mode) {
        if (mode === 'DELETE') {
          const newTopics = [...topics];
          newTopics.splice(selectedId-1, 1);
          setTopics(newTopics);
          setMode('WELCOME');
        } else {
          setMode(mode);
        }
      }} />
    </>
  );
}
