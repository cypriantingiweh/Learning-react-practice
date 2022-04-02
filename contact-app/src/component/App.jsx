import React from "react";

import Card from "./Card";
import contacts from "./../contacts"

function createCard(contacts){
  return  <Card id = {contacts.id} key ={contacts.id} name = {contacts.name}  phone = {contacts.phone}  email = {contacts.email}  imgURL = {contacts.imgURL} />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

          {contacts.map(createCard)}
    </div>
  );
}

export default App;