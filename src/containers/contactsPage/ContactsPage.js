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

 //console.log('The current contacts name: ' + name);
 //console.log('The current contacts number: ' + phone);
 //console.log('The current contacts email: ' + email);
 console.log(currentContacts);

 useEffect(() => {

    
  currentContacts.forEach(
    element => {

      console.log(element.name);
      console.log('current state of name: ' + name)
      console.log('duplicate value is: ' + duplicate)
      if(element.name === name)
      setDuplicate(true);
      if(!name)
      setDuplicate(false);
    }
  )
}
);

 const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   //console.log(duplicate);
   if(!duplicate){
    props.newContact(name,phone,email);
    //setDuplicate(false);
    
    setName('');
    setPhone('');
    setEmail('');
    }
    /*
  else if(duplicate){
    setDuplicate(false);
  }*/
  };


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 //not sure if useEffect method is right
  

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit ={handleSubmit} 
        setName = {setName} setPhone = {setPhone} setEmail = {setEmail} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList  contactArr = {currentContacts}/>
      </section>
    </div>
  );
};
