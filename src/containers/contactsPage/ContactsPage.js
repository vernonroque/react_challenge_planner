import React, {useState,useEffect} from "react";
import { ContactForm } from '../../components/contactForm/ContactForm.js';
import { TileList } from "../../components/tileList/TileList.js";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const currentContacts = props.contactsArr;

 const [name,setName] = useState('');
 const [phone,setPhone] = useState('');
 const [email,setEmail] = useState(''); 
 const [duplicate,setDuplicate] = useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate)
   props.newContact(name,phone,email);

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 //not sure if useEffect method is right
  useEffect(() => {
    currentContacts.forEach(testName => {
      if(testName===currentContacts.name)
      setDuplicate(true);
    })
   });

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit ={handleSubmit} 
        setName ={setName} setPhone = {setPhone} setEmail = {setEmail} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList  contactArr = {currentContacts}/>
      </section>
    </div>
  );
};
