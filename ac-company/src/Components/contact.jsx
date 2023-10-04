import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../CSS/contact.css'


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dfboqvi', 'contact_form', form.current, 'i2GbDsMhksqcR1bad')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form ref={form} onSubmit={sendEmail}>

    <div className='field-input'>
      <label>Name</label>
    </div>
      <input className='box' type='text' name="user_name"></input>
    <div className='field-input'>
      <label>Email</label>
    </div>
      <input className='box' type="email" name="user_email"></input>
    <div className='field-input'>
      <label>Message</label>
    </div>
      <textarea className='box' name="message" />
    <div className='field-input'>
      <input type="submit" value="send"/>
    </div>

    </form>
  );
}

export default Contact;
