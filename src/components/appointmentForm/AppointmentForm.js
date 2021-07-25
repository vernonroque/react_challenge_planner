import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleTime = (e) => {
    setTime(e.target.value);
  }

  const handlePick = (e) => {
    setContact(e.target.value)
  }



  return (
    <form onSubmit = {handleSubmit}>
      <input onChange={handleTitle} type='text' placeholder = 'Please enter your title' />
      <input onChange={handleDate} type='date' min= {getTodayString()} placeholder = 'Please enter desired date' />
      <input onChange={handleTime}  type='time' placeholder = 'Please enter desired time' />
      <ContactPicker contacts = {contacts} handlePick = {handlePick}/>
      <button>Submit</button>
    </form>
  );
};
