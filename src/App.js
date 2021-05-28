import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginSignup from './containers/LoginSignup'
import SpellsContainer from './containers/SpellsContainer'
import SpellBookContainer from './containers/SpellBookContainer'

import {tokenCheck} from './actions/tokenCheck'
import {logoutUser} from './actions/logoutUser'
import {fetchSpellBooks} from './actions/fetchSpellBooks'
import {fetchSpellSpellBooks} from './actions/fetchSpellSpellBooks'

class App extends Component {
  
  componentDidMount() {
    const token = localStorage.getItem("token")
    this.props.tokenCheck(token)
    this.props.fetchSpellBooks()
    this.props.fetchSpellSpellBooks()
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    //redirect
    this.props.logoutUser()
  }

  render() {
    return (
      <div className="">
        <Navbar user={this.props.user} logOutHandler={this.logOutHandler}/>
        <Route exact path="/" render={() => <SpellsContainer user={this.props.user} />} />
        <Route exact path="/login-signup" component={LoginSignup} />
        <SpellBookContainer user={this.props.user} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  }
}

export default connect(mapStateToProps, {tokenCheck, logoutUser, fetchSpellBooks, fetchSpellSpellBooks})(App)