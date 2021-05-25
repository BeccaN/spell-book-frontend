import React from 'react'
import CreateSpellBook from './CreateSpellBook'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

function SpellBooks(props) {
  const spell_books = (props.user) ? props.spell_books.filter(book => book.user_id === props.user.id) : null
  
  const tokenUserCheck = () => {
    if (localStorage.getItem("token") !== null) {
      if (props.user) {
        return (
          <div className="m-3 my-4 spell-books">
            {spell_books.map(book =>
            <div key={book.id} className="spell-book m-3">
              <Link to={`/spellbooks/${book.id}`} className=""><h2><span>{book.title}</span></h2></Link>
            </div>
            )}
          </div>
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
      
      <CreateSpellBook user={props.user}/>
      
      {tokenUserCheck()}
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    spell_books: state.spell_books.spell_books
  }
}

export default connect(mapStateToProps)(SpellBooks)