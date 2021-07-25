import React,{useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [contacts,setContacts] = useState('');
 const [date,setDate] = useState('');
 const [time, setTime] =useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.newAppointment(title,contacts,date,time);
   setTitle('');
   setContacts('');
   setDate('');
   setTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit = {handleSubmit} 
        setTitle={setTitle} setContact={setContacts} setDate={setDate} setTime={setTime} contacts={props.contactsArr}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contactArr = {props.appointmentsArr}/>
      </section>
    </div>
  );
};
