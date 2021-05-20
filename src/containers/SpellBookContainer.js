import React, { Component} from 'react'
import { Route, Switch} from 'react-router-dom';
import SpellBooks from '../components/SpellBooks'
import SpellBookShow from '../components/SpellBookShow'

import { connect } from 'react-redux';

class SpellBookContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/spellbooks/:id" render={(routerProps) => <SpellBookShow {...routerProps} />} />
          <Route path="/spellbooks" render={(routerProps) => <SpellBooks {...routerProps} user={this.props.user} /> } />
        </Switch>
      </div>
    )
  }
}

export default connect(null)(SpellBookContainer)