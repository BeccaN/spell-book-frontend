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
    props.loginUser({username: username, password: password}, history)
  }

  return (
    <div className="center">
      <h3 className="header my-1" >Login Form</h3>
      <form onSubmit={submitHandler}>
        <input className="my-1" type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input className="my-1" type="password" name="password" placeholder="password" value={password} autoComplete="on" onChange={(e) => setPassword(e.target.value)} /><br />
        <input className="my-1 form-btn" type="submit" value="login" />
        <div>
          {
          (props.error_login !== "") ? 
            <div>{props.error_login}</div> 
          : null
          }
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    error_login: state.error.error_login
  }
}

export default connect(mapStateToProps, {loginUser})(Login)