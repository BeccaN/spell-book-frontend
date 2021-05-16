import React from 'react'

export default function SpellInfo(props) {
  return (
    <div className="container">
      <h3>Spell Info</h3>
      <div className="row">
        <div className="col">
          Spell: <strong>{props.spell.name}</strong>
        </div>
        <div className="col">
          Level: <strong>{props.spell.level}</strong>
        </div>
      </div>
      <div className="row">
        <div className="col">
          classNamees: <strong>{props.spell.dnd_className}</strong>
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
      
      <div classNameName="mt-2">        
        Description: <div dangerouslySetInnerHTML={{__html: props.spell.desc}} />
        <div dangerouslySetInnerHTML={{__html: props.spell.higher_lvl}} />
      </div>
  
      <div>
        <small>Book Page: {props.spell.page}</small>
      </div>
    </div>
  )
}

