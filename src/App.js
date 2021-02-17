import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Links from "./links/Links"
import About from "./about/About"
import Sidebar from "./sidebar/Sidebar"
import Signup from "./login/Singnup"
import { AuthProvider } from "./context/AuthContext"
import Dashboard from "./login/Dashboard"
import Login from "./login/Login"
import PrivateRoute from "./login/PrivateRoute"
import ForgotPassword from "./login/ForgotPassword"
import UpdateProfile from "./login/UpdateProfile"
import Quiz from "./categories/Quiz"
import Tenses from "./grammar/Tenses"
import Present from "./grammar/Present"
import Header from "./header/Header"
import { PresentPerfect } from "./grammar/PresentPerfect"
import "./App.css"
import CardinalNumbers from "./vocabulary/CardinalNumbers"
import OrdinalNumbers from "./vocabulary/OrdinalNumbers"
import Time from "./vocabulary/Time"
import Date from "./vocabulary/Date"
import PartsOfTheBody from "./vocabulary/PartsOfTheBody"
import ContactMe from "./ContactMe"
import Idioms from "./Idioms"
import Spring from "./vocabulary/Spring"
import Verbs from "./exercises/Verbs"
import TipsAndTricks from "./writting/TipsAndTricks"
import SpeakingTips from "./speaking/SpeakingTips"
import ListeningTips from "./listening/ListeningTips"

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Links></Links>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot' component={ForgotPassword} />
            <Route path='/tenses' component={Tenses} />
            <Route path='/about' component={About} />
            <Route path='/quizes' component={Quiz} />
            <Route path='/present' component={Present} />
            <Route path='/home' component={Header} />
            <Route path='/present-perfect' component={PresentPerfect} />
            <Route path='/cardinal-numbers' component={CardinalNumbers} />
            <Route path='/ordinal-numbers' component={OrdinalNumbers} />
            <Route path='/time' component={Time} />
            <Route path='/date' component={Date} />
            <Route path='/body' component={PartsOfTheBody} />
            <Route path='/contact' component={ContactMe} />
            <Route path='/idioms' component={Idioms} />
            <Route path='/spring' component={Spring} />
            <Route path='/exercises-grammar' component={Verbs} />
            <Route path='/tips' component={TipsAndTricks} />
            <Route path='/speaking-tips' component={SpeakingTips} />
            <Route path='/listening-tips' component={ListeningTips} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
