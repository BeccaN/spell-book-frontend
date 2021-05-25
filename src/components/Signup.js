import React, { useState } from 'react'
import { connect } from 'react-redux'
import {signupUser} from '../actions/signupUser'
import {useHistory} from 'react-router-dom'

function Signup(props) {
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[errors, setErrors] = useState([])

  let history = useHistory()
  const emptyErrors = {errors: []}

  const validateSignup = (data) => {
    setErrors({...emptyErrors})
    
    if ((data.username.length < 4) || (data.username.length > 20)) {
      let error = "Username must be between 4 and 20 characters."
      setErrors(errors.concat(error))
    } else if (!(data.email) || !(data.email.includes('@'))) {
      let error = "Must provide a valid email."
      setErrors(errors.concat(error))
    } else if ((data.password.length < 4) || (data.password.length > 20)) {
      let error = "Password must be between 4 and 20 characters."
      setErrors(errors.concat(error))
    } else {
      return false
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
  
    if (!(validateSignup({username: username, email: email, password: password}))) {
      props.signupUser({username: username, email: email, password: password}, history)
    }
  }

  return (
    <div className="center">
      <h3 className="header my-1">Signup Form</h3>
      <form onSubmit={submitHandler}>
        <input className="my-1" type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input className="my-1" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input className="my-1" type="password" name="password" placeholder="password" value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} /><br />
        <input className="my-1 form-btn" type="submit" value="signup" />
        <div>
          {
          (errors.length > 0) ? 
            <>
              <div>{errors.map(error => <p>{error}</p>)}</div> 
            </>
          : null
          }
          {
          (props.error) ? 
            <>
              <div>{props.error}</div> 
            </>
          : null
          }
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    error: state.error.error_signup
  }
}

export default connect(mapStateToProps, {signupUser})(Signup)