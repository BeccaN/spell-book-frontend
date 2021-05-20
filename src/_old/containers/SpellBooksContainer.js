import React, { Component } from 'react'
import SpellBookShow from '../components/SpellBookShow'
import SpellBooks from '../components/SpellBooks'
import { connect } from 'react-redux'
import {fetchSpellBooks} from '../actions/fetchSpellBooks'
import {fetchSpellSpellBooks} from '../actions/fetchSpellSpellBooks'
import {Route, Switch} from 'react-router-dom';

class SpellBooksContainer extends Component {
  componentDidMount() {
    this.props.fetchSpellBooks()
    this.props.fetchSpellSpellBooks()
  } 
  
  render() {
  
    return (
      <div>
        <Switch>
          <Route path="/spellbooks/:id" render={(routerProps) => <SpellBookShow {...routerProps} spell_books={this.props.spell_books} spell_spell_books={this.props.spell_spell_books} /> } />
          <Route path="/spellbooks" render={(routerProps) => <SpellBooks {...routerProps} spell_books={this.props.spell_books}/> } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      spell_books: state.spell_books.spell_books,
      spell_spell_books: state.spell_spell_books.spell_spell_books
  }
}

export default connect(mapStateToProps, {fetchSpellBooks, fetchSpellSpellBooks})(SpellBooksContainer)