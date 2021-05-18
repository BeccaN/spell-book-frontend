import React, { useState } from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../actions/loginUser'
import {useHistory} from 'react-router-dom'

function Login(props) {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")

  let history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    props.loginUser({username: username, password: password})
    history.push('/')
  }

    return (
      <div>
        <h3>Login Form</h3>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <input type="submit" value="login" />
        </form>
      </div>
    )

}

export default connect(null, {loginUser})(Login)