import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts,setContacts] = useState([]);
 const [appointments,setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const newContact = (name,phoneNum,email) => {
      setContacts( prevContacts => [...prevContacts,{name:name,phoneNum:phoneNum,email:email}]);
  }

  const newAppointment = (title,contact,date,time) => {
    setAppointments(prevAppointments => [...prevAppointments,{title:title,contact:contact,date:date,time:time}]);
  }


 

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contactsArr = {contacts} newContact = {newContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointmentsArr = {appointments} newAppointment = {newAppointment} contactsArr={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
