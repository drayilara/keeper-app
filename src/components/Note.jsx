import React from "react";




export default function Note(props) {
    
    return (
        <div className="note" id={props.id}>
            <h1> {props.title} </h1>
            <p> {props.content} </p>
            <button onClick={(e) => {
                props.deleteKeep(e, props.id);
            }}> DELETE </button>
        </div>
    )
}