import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

// Styled components for the feedback form
const FeedbackContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const serviceID = 'service_1adczqp';
    const templateID = 'template_khoh0t5';
    const userID = '45W992eM162F_FSmd';

  
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Feedback Submitted! Thank you for your response.');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Sorry, something went wrong. Please try again later.');
        }
      );

    setFormData({
      name: '',
      email: '',
      feedback: '',
    });
  };

  return (
    <FeedbackContainer>
      <Title>We'd Love Your Feedback!</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Your Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor="email">Your Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="feedback">Your Feedback:</Label>
        <TextArea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />

        <Button type="submit">Submit Feedback</Button>
      </Form>
    </FeedbackContainer>
  );
};

export default Feedback;
