import React from 'react'
import SpellInfo from './SpellInfo'

export default function Spells(props) {
  const spells = props.spell_book.spells.sort(function(a, b) {
    return a.level - b.level
  })

  return (
    <div className="spells">
      {spells.map(spell => <div className="spell"><SpellInfo spell={spell} /></div>)}
    </div>
  )
}
