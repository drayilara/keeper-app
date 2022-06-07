import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Note from "./Note";
import notes from "../notes";






export default function App() {
    return (
        <React.Fragment> 
        <Navbar />
        {
            notes.map(note => 
            <Note 
            key ={note.key}
            title={note.title}
            content={note.content}
            />    
        )

        }   
        <Footer />
        </React.Fragment>   
    )
}

// Ensure commit