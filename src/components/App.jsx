import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    let [keep, setKeep] = useState([{title: "Title A", content: "Content A"}]);

    function handleTitle(e) {
        e.persist();
        setTitle(e.target.value);
    }

    function handleContent(e) {
        e.persist();
        setContent(e.target.value);
    }

    function updateKeep(e) {
        e.preventDefault();
        setKeep(prev => {
            return [...prev, {title : title, content: content}];
        })
        setTitle("");
        setContent("");   
    }

    function deleteKeep(e,id) {
        e.preventDefault();
        setKeep(prev => {
           return prev.filter((keep, index) => {
                return index !== id;
            })
        })
    }


  return (
    <div>
      <Header />
      <CreateArea 
      handleContent={handleContent} 
      handleTitle={handleTitle} 
      updateKeep={updateKeep}
      title={title}
      content={content}
      />
      {keep.map((kept, index) => <Note 
      key={kept.title} 
      id={index} 
      title={kept.title} 
      content={kept.content}
      deleteKeep={deleteKeep}
      />)}
      <Footer />
    </div>
  );
}

export default App;