import React from "react";
import ReactDOM from "react-dom";
import Header from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea.jsx";
import notes from "../notes";



function App() {
    return (<div> <Header></Header> <CreateArea></CreateArea> {notes.map(body => <Note key={body.key} title={body.title} content={body.content}></Note>)}<Footer></Footer></div>);
}
export default App;