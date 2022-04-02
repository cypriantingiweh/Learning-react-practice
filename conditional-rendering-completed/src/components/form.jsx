import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegister && <Input type="password" placeholder="confirm Password" /> }
       
      <button type="submit">{
        props.isRegister ? "Register":"Login"
      }</button>
    </form>
  );
}

export default Form;
