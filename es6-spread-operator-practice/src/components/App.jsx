import React, { useState } from "react";
import ListItem from "./todoItem";
import InputArea from "./inputarea";

function App() {

  const [InputText,setInputText] = useState("");
  const [items,setItems] =useState([]);

  function handleChange(event){
    const value = event.target.value;
    setInputText(value)
  }

  function addhandler(event){
      setItems(prevItem =>([...prevItem,InputText]));
      setInputText("")
  }

  function handleDelete(id){
    console.log(id)
    setItems(prevItem => {
     return prevItem.filter((item,index) => {return index !== id})
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* <div className="form">
        <input type="text" onChange={handleChange} value ={InputText} />
        <button onClick={addhandler} >
          <span>Add</span>
        </button>
      </div> */}
      <InputArea onClick={addhandler} onChange={handleChange} value ={InputText}  />
      <div>
        <ul>
          {items.map((item,index) => <ListItem
          key={index} id ={index} 
          onChecked = {handleDelete}
          text = {item} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
