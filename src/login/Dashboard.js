import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import useAuth from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return currentUser ? (
    <>
      <div className='col-md-4 mt-5 ml-auto mr-auto'>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4 title'>Profile</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to='/update' className='btn btn-success w-100 mt-3'>
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          <Button variant='link' onClick={handleLogout} variant='success'>
            Log Out
          </Button>
        </div>
      </div>
    </>
  ) : null
}
