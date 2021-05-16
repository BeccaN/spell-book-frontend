import React, { Component } from 'react'
import SpellBookShow from '../components/SpellBookShow'
import SpellBooks from '../components/SpellBooks'
import { connect } from 'react-redux'
import {fetchSpellBooks} from '../actions/fetchSpellBooks'
import {Route, Switch} from 'react-router-dom';

class SpellBooksContainer extends Component {
  componentDidMount() {
    this.props.fetchSpellBooks() 
  } 
  
  render() {
  
    return (
      <div>
        <Switch>
          <Route path="/spellbooks/:id" render={(routerProps) => <SpellBookShow {...routerProps} spell_books={this.props.spell_books}/> } />
          <Route path="/spellbooks" render={(routerProps) => <SpellBooks {...routerProps} spell_books={this.props.spell_books}/> } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      spell_books: state.spell_books.spell_books
  }
}

export default connect(mapStateToProps, {fetchSpellBooks})(SpellBooksContainer)