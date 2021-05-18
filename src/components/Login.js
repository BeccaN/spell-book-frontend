import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../actions/loginUser'

class Login extends Component {
  state = {
    username: "", 
    password: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state)
  }
  
  render() {
    return (
      <div>
        <h3>Login Form</h3>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} /><br />
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br />
          <input type="submit" value="login" />
        </form>
      </div>
    )
  }
}

export default connect(null, {loginUser})(Login)