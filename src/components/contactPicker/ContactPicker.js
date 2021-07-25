import React from "react";

export const ContactPicker = (props) => {

  const contactNamesArr= props.contacts.map(element=>element.name);

  return (
    <select onChange={props.handlePick} id='contacts'>
      <option id='No Contact'>No Contact</option>
      {contactNamesArr.map((element,index) => {
        return <option key ={index} value = {element}>{element}</option>
      })}
    </select>
  );
};
