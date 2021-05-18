import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signupUser} from '../actions/signupUser'

class Signup extends Component {
  state = {
    username: "", 
    email: "", 
    password: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.signupUser(this.state)
  }
  
  render() {
    return (
      <div>
        <h3>Signup Form</h3>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} /><br />
          <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} /><br />
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {signupUser})(Signup)