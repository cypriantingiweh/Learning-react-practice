import React, { useState } from "react";

function CreateArea(props) {

    const [notes,setNotes] =useState({
      title:"",
      content:""
    });

   function handleOnChange(event){
        const {name,value} = event.target;
        setNotes(prevValue => {
            return { ...prevValue,[name]:value}
        });
    }

    function submitNote(event){
        props.onClick(notes)
        event.preventDefault();
        setNotes({
      title:"",
      content:""
    })
    }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" onChange={handleOnChange} value={notes.title} placeholder="Title" />
        <textarea name="content" onChange={handleOnChange} value={notes.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
