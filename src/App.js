import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Links from "./links/Links"
import About from "./about/About"
import Sidebar from "./sidebar/Sidebar"
import Signup from "./login/Singnup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/AuthContext"
import Dashboard from "./login/Dashboard"
import Login from "./login/Login"
import PrivateRoute from "./login/PrivateRoute"
import ForgotPassword from "./login/ForgotPassword"
import UpdateProfile from "./login/UpdateProfile"
import Quiz from "./categories/Quiz"
import Tenses from "./grammar/Tenses"
import Present from "./grammar/Present"
import "./App.css"

function App() {
  return (
    <>
      <div>
        <h1>
          <span>German</span> with Friends
        </h1>
        <h5>
          Have <span>Fun</span> while learning
        </h5>
        <Sidebar></Sidebar>
        <Links></Links>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/update' component={UpdateProfile} />
              <Route className='container' path='/signup' component={Signup} />
              <Route className='container' path='/login' component={Login} />
              <Route
                className='container'
                path='/forgot'
                component={ForgotPassword}
              />
              <Route path='/tenses' component={Tenses} />
              <Route path='/about' component={About} />
              <Route path='/quiz' component={Quiz} />
              <Route path='/present' component={Present} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      {/* 
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
    </> */}
    </>
  )
}

export default App
