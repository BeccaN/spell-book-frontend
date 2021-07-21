import React, { Component} from 'react'
import { Route, Switch} from 'react-router-dom';
import SpellBooks from '../components/SpellBooks'
import SpellBookShow from '../components/SpellBookShow'

import {fetchSpellBooks} from '../actions/fetchSpellBooks'
import { connect } from 'react-redux';

class SpellBookContainer extends Component {

  componentDidMount() {
    this.props.fetchSpellBooks(localStorage.getItem("token"))
  }

  render() {
    return (
      <div className="m-3">
        <Switch>
          <Route path="/spellbooks/:id" render={(routerProps) => <SpellBookShow {...routerProps} user={this.props.user} />} />
          <Route path="/spellbooks" render={(routerProps) => <SpellBooks {...routerProps} user={this.props.user} /> } />
        </Switch>
      </div>
    )
  }
}

export default connect(null, {fetchSpellBooks})(SpellBookContainer)