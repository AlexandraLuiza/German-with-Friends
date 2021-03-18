import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap"
import "./ContactForm.css"

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className='container mt-5'>
      <div className='col-md-6 mt-5 ml-auto mr-auto'>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridtext'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' id="name" placeholder='Enter name' required />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' id="email" placeholder='Enter email' required />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridtext'>
            <Form.Label>Message</Form.Label>
            <textarea className='form-control form-input message textarea' id="message" rows='8' placeholder='Enter your message here'></textarea>
          </Form.Group>
          <Button className='btn-submit' variant='success' type="submit">{status}</Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;



