import React from "react"
import "./App.css"
import Sidebar from "./sidebar/Sidebar"
import Grammar from "./pages/Grammar"
import Links from "./links/Links"
import About from "./about/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./login/Singnup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/AuthContext"
import Dashboard from "./login/Dashboard"
import Login from "./login/Login"
import PrivateRoute from "./login/PrivateRoute"
import ForgotPassword from "./login/ForgotPassword"
import UpdateProfile from "./login/UpdateProfile"
import Quiz from "./pages/Quiz"

function App() {
  return (
    <>
      <div>
        <Sidebar>
          <Router>
            <Switch>
              <Route path='/sidebar' component={Sidebar} />
              <Route path='/pages' component={Grammar} />
              <Route path='/pages' component={Quiz} />
            </Switch>
          </Router>
        </Sidebar>
      </div>
      <h1>
        German for <span>Fun</span>
      </h1>
      <h5>
        Learn <span>German</span> with your friends
      </h5>
      <div>
        <Links>
          <Router>
            <Switch>
              <Route path='./links' component={Links} />
              <Route path='./about' component={About} />
            </Switch>
          </Router>
        </Links>
      </div>
      <div>
        <Container
          className='d-flex align-items-center justify-content-center'
          style={{ minHeight: "100vh" }}
        >
          <div className='w-100' style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <PrivateRoute
                    path='/login/Update-profile'
                    component={UpdateProfile}
                  />
                  <Route path='/login/Signup' component={Signup} />
                  <Route path='/login/Login' component={Login} />
                  <Route
                    path='/login/Forgot-password'
                    component={ForgotPassword}
                  />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </Container>
      </div>
    </>
  )
}
export default App
