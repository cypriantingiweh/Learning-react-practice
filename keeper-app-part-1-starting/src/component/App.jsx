import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"

function App(){

    const [notes,setNotes] =useState([])

    function addNotes(notes){
        
        setNotes(prevValue =>{
            return ([...prevValue,notes]);
        });
    }

    function deleteNotes(id){
        setNotes(prevValue =>{
            return prevValue.filter((note,index)=>{
                return index !== id;
            })
        })
    }

    return (<div>
        <Header />
         <CreateArea onClick = {addNotes} />
         {notes.map((note,index) => <Note onDelete={deleteNotes} id={index} key={index} title ={note.title}  content ={note.content}/> )}
        <Footer />
    </div>)
}

export default App;