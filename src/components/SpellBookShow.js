import React from 'react'
import SpellInfo from './SpellInfo'

export default function SpellBookShow(props) {
  const spell_book = props.spell_books.find(book => book.id === parseInt(props.match.params.id))
  
  const spells = (spell_book) ? spell_book.spells.sort(function(a, b) {
    return a.level - b.level
  }) : null
  
  return (
    <div>
      {spell_book ? <h1>{spell_book.title}</h1> : null}
  
      {spell_book ? 
        <div className="spells">
          {spells.map(spell => <div className="spell" key={spell.id}><SpellInfo spell={spell} spell_book_id={spell_book.id} spell_spell_books={props.spell_spell_books} /></div>)}
        </div>
      : null}
    </div>
  )
}