import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
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
      <div className="mx-4">
        <Navbar user={this.props.user} logOutHandler={this.logOutHandler}/>
        <Route exact path="/" render={() => <SpellsContainer user={this.props.user} />} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <SpellBookContainer user={this.props.user} />
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