import React from 'react';
import '/stylesheet/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h2 className='footer-title'>Greeting</h2>
        <p className='footer-description'>
          Thank you for visiting our website. We hope you found what you were looking for.
          Stay connected with us through our social media channels for updates and more.
        </p>
        <div className='social-media'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
        <div className='contact-info'>
          <p>Email: <a href='email:gktechp931@gmail.com'>gktechp931@gmail.com</a></p>
          <p>Phone: <a href='tel:+8360433321'>8360433321</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
