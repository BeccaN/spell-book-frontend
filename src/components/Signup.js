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
      <h3 className="w-100">Signup Form</h3>
      <form onSubmit={submitHandler} className="w-100">
        <input className="my-1" type="text" name="username" placeholder="username" value={username} pattern=".{6,12}" title="6 to 12 characters" required onChange={(e) => setUsername(e.target.value)} /><br />
        <input className="my-1" type="email" name="email" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)} /><br />
        <input className="my-1" type="password" name="password" placeholder="password" value={password} autoComplete="off" pattern=".{8,12}" title="8 to 12 characters" required onChange={(e) => setPassword(e.target.value)} /><br />
        <input className="my-1 form-btn" type="submit" value="signup" />
        <div>
          {
          (props.error_signup !== "") ? 
            <div className="error">{props.error_signup}</div> 
          : null
          }
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    error_signup: state.error.error_signup
  }
}

export default connect(mapStateToProps, {signupUser})(Signup)