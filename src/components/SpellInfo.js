import React from 'react'
import DeleteSpellInput from './DeleteSpellInput'

export default function SpellInfo(props) {
  return (
    <div className="container" key={props.spell.id}>
      <div className="d-flex justify-content-between">
        <h3>{props.spell.name}</h3>
        <DeleteSpellInput spell={props.spell} join_id={props.join_id} />
      </div>
      <div className="row">
        <div className="col">
          Level: <strong>{props.spell.level}</strong>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Class: <strong>{props.spell.dnd_class}</strong>
        </div>
        <div className="col">
          School: <strong>{props.spell.school}</strong>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Casting Time: <strong>{props.spell.casting_time}</strong>
        </div>
        <div className="col">
          Duration: <strong>{props.spell.duration}</strong>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Components: <strong>{props.spell.components}</strong>
        </div>
        <div className="col">
          Materials: <strong><div dangerouslySetInnerHTML={{__html: props.spell.material}} /></strong>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Concentration: <strong>{props.spell.concentration}</strong>
        </div>
        <div className="col">
          Ritual: <strong>{props.spell.ritual}</strong>
        </div>
      </div>
      
      <div className="mt-2">        
        Description: <div dangerouslySetInnerHTML={{__html: props.spell.desc}} />
        <div dangerouslySetInnerHTML={{__html: props.spell.higher_lvl}} />
      </div>
  
      <div>
        <small>Book Page: {props.spell.page}</small>
      </div>
    </div>
  )
}

