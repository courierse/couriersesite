import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_iz7bu4r',
        'template_odkigcw',
        e.target,
        'OMs3Yg2nCe7YirP5O'
      )
      .then(
        (result) => {
          setSuccessMessage('Your form has been submitted successfully');
          setErrorMessage('');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error); // Log the error
          setErrorMessage('There was an error submitting the form, please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>Feel free to send us your questions or requests.</p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder='Enter your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            placeholder='Enter your Email'
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Message</label>
          <textarea
            name="message"
            className={styles.textarea}
            placeholder='Send us a message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {/* Display success or error message */}
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default ContactForm;
