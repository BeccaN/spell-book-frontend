import React from 'react'
import CreateSpellBook from './CreateSpellBook'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom'


function SpellBooks(props) {
  const spell_books = (props.user) ? props.spell_books.filter(book => book.user_id === props.user.id) : null
  
  return (
    <div>
      <div className="">
        <CreateSpellBook user={props.user}/>
      </div>
      <div>
        {(props.user) ? <h3>{
        
        props.user.username}'s Spell Books</h3> : null}
        
        {(spell_books) ? 
        <>
          {spell_books.map(book => <li key={book.id}><Link to={`/spellbooks/${book.id}`}>{book.title}</Link></li>)}
        </>
        : <Redirect to="/" />
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    spell_books: state.spell_books.spell_books
  }
}

export default connect(mapStateToProps)(SpellBooks)