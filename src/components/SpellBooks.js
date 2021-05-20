import React, { Component } from 'react'
import CreateSpellBook from './CreateSpellBook'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class SpellBooks extends Component {
  
  render() {
    const spell_books = this.props.spell_books.filter(book => book.user_id === this.props.user.id)

    return (
      <div>
        <div className="">
          <CreateSpellBook user={this.props.user}/>
        </div>
        <div>
          {(this.props.user) ? <h3>{this.props.user.username}'s Spell Books</h3> : null}
          
          {(spell_books) ? 
          <>
            {spell_books.map(book => <li key={book.id}><Link to={`/spellbooks/${book.id}`}>{book.title}</Link></li>)}
          </>
          : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spell_books: state.spell_books.spell_books
  }
}

export default connect(mapStateToProps)(SpellBooks)