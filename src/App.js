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


class App extends Component {
  
  componentDidMount() {
    
    const token = localStorage.getItem("token")
    this.props.tokenCheck(token)
    // this.props.fetchSpellBooks(token)
    // this.props.fetchSpellSpellBooks(token)
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.logoutUser()
  }

  render() {
    
    return (
      <div className="position-relative page-container">
        <div className="content-wrap">
          <Navbar user={this.props.user} logOutHandler={this.logOutHandler}/>
          <Route exact path="/" render={() => <SpellsContainer user={this.props.user} />} />
          <Route exact path="/login-signup" component={LoginSignup} />
          <SpellBookContainer user={this.props.user} />
        </div>
        <Route path="/" render={(routerProps) => <Footer {...routerProps}/> } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  }
}

export default connect(mapStateToProps, {tokenCheck, logoutUser})(App)