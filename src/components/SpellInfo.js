import React from 'react'

export default function SpellInfo(props) {
  return (
    <div className='col-md border p-3 m-2 bg-light shadow h-100'>
        {props.selectedSpell != null ? (
        <div class="container">
          <h3>Spell Info</h3>
          <div class="row">
            <div class="col">
              Spell: <strong>{props.selectedSpell.name}</strong>
            </div>
            <div class="col">
              Level: <strong>{props.selectedSpell.level}</strong>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Classes: <strong>{props.selectedSpell.dnd_class}</strong>
            </div>
            <div class="col">
              School: <strong>{props.selectedSpell.school}</strong>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Casting Time: <strong>{props.selectedSpell.casting_time}</strong>
            </div>
            <div class="col">
              Duration: <strong>{props.selectedSpell.duration}</strong>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Components: <strong>{props.selectedSpell.components}</strong>
            </div>
            <div class="col">
              Materials: <strong>{props.selectedSpell.material}</strong>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Concentration: <strong>{props.selectedSpell.concentration}</strong>
            </div>
            <div class="col">
              Ritual: <strong>{props.selectedSpell.ritual}</strong>
            </div>
          </div>
          
          <div className="mt-2">        
            Description: <div dangerouslySetInnerHTML={{__html: props.selectedSpell.desc}} />
            <div dangerouslySetInnerHTML={{__html: props.selectedSpell.higher_lvl}} />
          </div>
      
          <div>
            <small>Book Page: {props.selectedSpell.page}</small>
          </div>
        </div>
        ) : null}
    </div>
  )
}

