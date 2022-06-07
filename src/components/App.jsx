import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Note from "./Note";


export default function App() {
    return (
        <React.Fragment>  
        <Navbar />
        <Note />
        <Footer />
        </React.Fragment>   
    )
}