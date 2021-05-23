import React, { useState } from 'react'
import { connect } from 'react-redux'
import {signupUser} from '../actions/signupUser'
import {useHistory} from 'react-router-dom'

function Signup(props) {
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  let history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    props.signupUser({username: username, email: email, password: password}, history)
  }

  return (
    <div className="center">
      <h3 className="header my-1">Signup Form</h3>
      <form onSubmit={submitHandler}>
        <input className="my-1" type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input className="my-1" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input className="my-1" type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <input className="my-1" type="submit" value="signup" className="form-btn" />
      </form>
    </div>
  )
}

export default connect(null, {signupUser})(Signup)