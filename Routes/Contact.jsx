import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '/stylesheet/Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_i7okz1i', 'template_1a589h9', form.current, {
        publicKey: 'pwOZSAWyerYiFLJfX',
      })
      .then(
        () => {
          setStatus('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <fieldset>
          <legend>Contact Us</legend>

          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input type="text" id="from_name" name="from_name" required />
          </div>

          <div className="form-group">
            <label htmlFor="to_email">Email</label>
            <input type="email" id="to_email" name="to_email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>

          <div className="form-group">
            <input type="submit" value="Send" />
          </div>

          {status && <div className="status-message">{status}</div>}
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
