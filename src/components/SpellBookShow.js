import React from 'react'
import SpellInfo from './SpellInfo'

export default function SpellBookShow(props) {
  const spell_book = props.spell_books.find(book => book.id === parseInt(props.match.params.id))
  const spell_book_spells = props.spell_spell_books.filter(join => join.spell_book.id === spell_book.id)

  return (
    <div>
      {spell_book ? <h1>{spell_book.title}</h1> : null}
  
      {spell_book ? 
        <div className="spells">
          We've got a spell book!
          {spell_book_spells.map(join => <li>{join.id}</li>)}
        </div>
      : null}
    </div>
  )
}

// {props.spell_spell_books.filter(join => join.spell_book.id === spell_book.id).map(join => <div className="spell" key={join.spell.id}><SpellInfo spell={join.spell} join_id={join.id} /></div>)}
// {spell_book_spells.map(spell => <div className="spell" key={spell.id}><SpellInfo spell={spell} spell_spell_book={props.spell_spell_books.filter(join => join.spell.id === spell.id)} /></div>)}