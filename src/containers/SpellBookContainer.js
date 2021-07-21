import React, {useEffect} from 'react'
import { Route, Switch} from 'react-router-dom';
import SpellBooks from '../components/SpellBooks'
import SpellBookShow from '../components/SpellBookShow'

import { fetchSpellBooks } from '../actions/fetchSpellBooks';
import {fetchSpellSpellBooks} from '../actions/fetchSpellSpellBooks'

import { connect } from 'react-redux';

function SpellBookContainer(props) {

  useEffect(() => {
    const token = localStorage.getItem("token")
    props.fetchSpellBooks(token)
    props.fetchSpellSpellBooks(token)
  })

  return (
    <div>
      <Switch>
        <Route path="/spellbooks/:id" render={(routerProps) => <SpellBookShow {...routerProps} user={props.user} />} />
        <Route path="/spellbooks" render={(routerProps) => <SpellBooks {...routerProps} user={props.user} /> } />
      </Switch>
    </div>
  )
}

export default connect(null, {fetchSpellBooks, fetchSpellSpellBooks})(SpellBookContainer)