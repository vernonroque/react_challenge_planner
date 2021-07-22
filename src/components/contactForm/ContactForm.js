import React from "react";

export const ContactForm = (props) => {

  const handleName = (e) => {
    props.setName(e.target.value);
  }
  const handlePhone = (e) => {
    props.setPhone(e.target.value);
  }
  const handleEmail = (e) => {
    props.setEmail(e.target.value);
  }

  return (
    <form onSubmit = {props.handleSubmit}>

      <input onChange={handleName} type='text' placeholder='Please enter your name'/>
      <input pattern = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" onChange={handlePhone} type='tel' placeholder='Please enter your phone number'/>
      <input onChange={handleEmail} type ='email' placeholder='Please enter your email'/>
      <button type= 'submit'>Submit</button>
    </form>
  )
};

