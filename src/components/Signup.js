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
    props.signupUser({username: username, email: email, password: password})
    history.push('/')
  }

  return (
    <div>
      <h3>Signup Form</h3>
      <form onSubmit={submitHandler}>
        <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <input type="submit" value="signup" />
      </form>
    </div>
  )
}

export default connect(null, {signupUser})(Signup)