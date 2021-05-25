import React from 'react'

export default function SpellDetails(props) {
  return (
    <>
      <div className="row">
        <div className="col">
          Level: <strong>{props.spell.level}</strong>
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
        <div className="col d-flex">
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
    </>
  )
}
