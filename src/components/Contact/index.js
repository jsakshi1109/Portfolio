import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from_email, from_name, subject, message } = form.current.elements;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!from_email.value || !emailRegex.test(from_email.value)) {
      setError('Invalid email address');
      return;
    }

    if (!from_name.value || !subject.value || !message.value) {
      setError('Please fill out all fields');
      return;
    }

    const emailParams = {
      from_name: from_name.value,
      from_email: from_email.value,
      subject: subject.value,
      message: message.value
    };

    emailjs
      .sendForm('service_f8rmclg', 'template_kmu4mz5', form.current, 'M_H8ZmTIg1lyejP9p')
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
          setError('');
        },
        (error) => {
          console.error('Failed to send email:', error);
          setError('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <Container>
      <ContactForm ref={form} onSubmit={handleSubmit}>
        <ContactTitle>Email Me 🚀</ContactTitle>
        <ContactInput placeholder="Your Email" name="from_email" />
        <ContactInput placeholder="Your Name" name="from_name" />
        <ContactInput placeholder="Subject" name="subject" />
        <ContactInputMessage placeholder="Message" rows="4" name="message" />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ContactButton type="submit" value="Send" />
      </ContactForm>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
        severity="success"
      />
    </Container>
  );
};

export default Contact;