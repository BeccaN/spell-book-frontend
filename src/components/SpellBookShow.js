import React from 'react'
import { connect } from 'react-redux'
import SpellInfo from './SpellInfo'
import {deleteSpellBook} from '../actions/deleteSpellBook'
import {useHistory} from 'react-router-dom'

function SpellBookShowFunc(props) {
  const spell_book = props.spell_books.find(book => book.id === parseInt(props.match.params.id))
  
  let spells = (spell_book) ? spell_book.spells.sort(function(a, b) {
    return a.level - b.level
  }) : null

  let history = useHistory()
  
  const handleClick = (e) => {
    props.deleteSpellBook(e.target.value)
    history.push('/spellbooks')
  }

  return (
    <div>
      <div className="d-flex">
        {spell_book ? <><h1>{spell_book.title}</h1></>
        : null}
      </div>
      {spell_book ? 
        <>
        <div className="spells">
          {spells.map(spell => <div className="spell" key={spell.id}><SpellInfo spell={spell} spell_book_id={spell_book.id} spell_spell_books={props.spell_spell_books} /></div>)}
        </div>
      
        <div>
          <button onClick={handleClick} value={spell_book.id}>Delete Spell Book</button>
        </div>
        </>
      : null}
    </div>  
  )   
}

export default connect(null, {deleteSpellBook})(SpellBookShowFunc)