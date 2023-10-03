import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
      <label>Name</label>
      <input type='text' name="user_name"></input>
      <label>Email</label>
      <input type="email" name="user_email"></input>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="send" />
    </form>
  );
}

export default Contact;
