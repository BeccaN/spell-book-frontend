import React from 'react'
import SpellInfo from './SpellInfo'

export default function SpellBookShow(props) {
  const spell_book = props.spell_books.find(book => book.id === parseInt(props.match.params.id))
  // const spell_book_spells = props.spell_spell_books.filter(join => join.spell_book_id === spell_book.id)

  return (
    <div>
      {spell_book ? <h1>{spell_book.title}</h1> : null}
  
      {spell_book ? 
        <div className="spells">
          {spell_book.spells.map(spell => <div className="spell" key={spell.id}><SpellInfo spell={spell} spell_book_id={spell_book.id} spell_spell_books={props.spell_spell_books} /></div>)}
        </div>
      : null}
    </div>
  )
}