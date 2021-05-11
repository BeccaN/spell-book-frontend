import React, { Component } from 'react'
import Spell from './Spell.js';

export default function SpellContainer(props) {
    const spells = (props.spells) ? props.spells.map(spell => <Spell stats={spell} />) : null
        
    return (
        <div className="spell-container">
            {spells}
        </div>
    )
}
