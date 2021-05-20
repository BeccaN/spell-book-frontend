import React, { Component } from 'react'
import SpellBookShow from '../components/SpellBookShow'
import SpellBooksNew from '../components/SpellBooksNew'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {fetchUser} from '../actions/fetchUser'

class SpellBooksContainerNew extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user)
  } 
  
  render() {
    console.log(this.props.spell_books)
    return (
      <div>
        <Switch>
          <Route path="/spellbooks/:id" render={(routerProps) => <SpellBookShow {...routerProps}  /> } />
          <Route path="/spellbooks" render={(routerProps) => <SpellBooksNew {...routerProps} spell_books={this.props.spell_books} user={this.props.user}/> } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      spell_books: state.spell_books
  }
}

export default connect(mapStateToProps, {fetchUser})(SpellBooksContainerNew)