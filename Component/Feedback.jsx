import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '/stylesheet/Feedback.css';

const Feedback = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_82z7mtr', 'template_6kpexlm', form.current, {
        publicKey: 'nv6N06tgQon7VL7U8',
      })
      .then(
        () => {
          setStatusMessage('Email sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          setStatusMessage('Failed to send email. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h1 className='header-text'> We value your Feedback!</h1>
      <label>Name</label>
      <input type="text" name="from_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
      {statusMessage && <p className="status-message">{statusMessage}</p>} {/* Display the status message */}
    </form>
  );
};

export default Feedback;
