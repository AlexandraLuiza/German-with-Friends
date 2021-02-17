import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import useAuth from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Login.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Please try again")
    }

    setLoading(false)
  }

  return (
    <>
      <div className='col-md-4 mt-5 ml-auto mr-auto'>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4 title'>Log In</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required />
              </Form.Group>
              <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className='w-100' variant='success'>
                Log In
              </Button>
            </Form>
            <div className='w-100 text-center mt-3'>
              <Link to='/forgot'>Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='w-50 text-center mt-2'>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
}
