import React, { useState } from "react";

function App() {

  const [headingText,setHeadingText] = useState("Hello");
  const [isMouseover,setMouseOver] =useState(false);

  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  

  function handleButtonClick(event){
    setHeadingText("Submitted");
    event.preventDefault()
  }

  function handleOnMouseHover(){
      setMouseOver(true)
  }
  function handleMouseOut(){
    setMouseOver(false)
  }

  function handleOnChange(event){

    const {value, name} = event.target;

    setContact(prevalue =>{
        // if(name === "fname"){
        //  return {
        //     fname: value,
        //     lname: prevalue.lname,
        //     email: prevalue.email
        //  } 
        // } else if(name=== "lname"){
        //     return {
        //     fname: prevalue.fname,
        //     lname: value,
        //     email: prevalue.email
        //  }
        // }else {
        //     return {
        //     fname: prevalue.fname,
        //     lname: prevalue.lname,
        //     email: value
        //  } 
        //  }
      //spread Operator
       return{ ...prevalue, [name]:value}
    })
    
  }

  return (
    <div className="container">
      <h1>{headingText} {contact.fname} {contact.lname} </h1>
      <p> { contact.email } </p>
      <form onSubmit={handleButtonClick}>
      <input type="text" name="fname" onChange={handleOnChange} value={contact.fname} placeholder="What's your first name?" />
      <input type="text" name ="lname" onChange={handleOnChange} value={contact.lname} placeholder="What's your Last name?" />
       <input type="text" name ="email" onChange={handleOnChange} value={contact.email} placeholder="What's your Last name?" />
      <button type="submit"
              style ={{backgroundColor:isMouseover ? "black":"white"}}
              onMouseOver = {handleOnMouseHover}
              onMouseOut = {handleMouseOut}>Submit</button>
      </form>
    </div>
  );
}

export default App;
