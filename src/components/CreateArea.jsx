import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input 
        onChange={props.handleTitle} 
        name="title" 
        placeholder="Title" 
        value={props.title} 
        />
        <textarea 
        onChange={props.handleContent} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        value={props.content}
        />
        <button onClick={props.updateKeep}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
