import React from 'react'
import CreateSpellBook from './CreateSpellBook'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom'


function SpellBooks(props) {
  const spell_books = (props.user) ? props.spell_books.filter(book => book.user_id === props.user.id) : null
  
  const tokenUserCheck = () => {
    if (localStorage.getItem("token") !== null) {
      if (props.user) {
        return (
          <>
          <h3>{props.user.username}'s Spell Books</h3>
          {spell_books.map(book => <li key={book.id}><Link to={`/spellbooks/${book.id}`}>{book.title}</Link></li>)}
          </>
        )
      } else {
      return (
        <h3> Loading... </h3>
      )}
    } else {
      return (<Redirect to="/" />)
    }
  }

  return (
    <div>
      <div className="">
        <CreateSpellBook user={props.user}/>
      </div>
      <div>
        {tokenUserCheck()}
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