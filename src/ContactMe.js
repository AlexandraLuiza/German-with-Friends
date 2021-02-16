import React from "react"
import { Form, Col, Button } from "react-bootstrap"
import "./ContactMe.css"

const ContactMe = () => {
  return (
    <div className='container row mt-5'>
      <div className='col-md-6 mt-4'>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridtext'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Enter name' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridtext'>
            <Form.Label>Message</Form.Label>
            <textarea
              className='form-control form-input message textarea'
              id='formGroupExampleInput2'
              rows='8'
              placeholder='Enter your message here'
            ></textarea>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ContactMe