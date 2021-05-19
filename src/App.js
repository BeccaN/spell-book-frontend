import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar'
import SpellsContainer from './containers/SpellsContainer'
import SpellBooksContainer from './containers/SpellBooksContainer'
import Signup from './components/Signup'
import Login from './components/Login'
import {tokenCheck} from './actions/tokenCheck'
import {logoutUser} from './actions/logoutUser'

class App extends Component {
  
  componentDidMount() {
    const token = localStorage.getItem("token")
    this.props.tokenCheck(token)
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    //redirect
    this.props.logoutUser()
  }

  render() {
    return (
      <div className="mx-4">
        <Navbar user={this.props.user} logOutHandler={this.logOutHandler}/>
        <Route exact path="/" component={SpellsContainer} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <SpellBooksContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, {tokenCheck, logoutUser})(App)