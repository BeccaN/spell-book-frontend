import React from 'react'
import Spells from './Spells'

export default function SpellBookShow(props) {
  const spell_book = props.spell_books.find(book => book.id === parseInt(props.match.params.id))

  return (
    <div>
      {spell_book ? <h1>{spell_book.title}</h1> : null}
      {spell_book ? <Spells spell_book={spell_book}/> : null}
    </div>
  )
}
