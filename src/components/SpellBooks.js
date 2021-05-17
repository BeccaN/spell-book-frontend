import React, { Component } from 'react'
import CreateSpellBook from './forms/CreateSpellBook'
import {Link} from 'react-router-dom'

class SpellBooksContainer extends Component {
  
  render() {
    return (
      <div>
        <div className="">
          <CreateSpellBook />
        </div>
        <div>
          <h3>All Spell Books</h3>
          {this.props.spell_books.map(book => <li key={book.id}><Link to={`/spellbooks/${book.id}`}>{book.title}</Link></li>)}
        </div>
      </div>
    )
  }
}

export default SpellBooksContainer