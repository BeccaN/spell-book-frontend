import React, { Component } from 'react'
import SpellInfo from '../components/SpellInfo'
import AddSpellForm from '../components/AddSpellForm'

export default class SpellInfoContainer extends Component {
  render() {
    return (
      <div  className='col-md border p-3 m-2 bg-light shadow h-100 sticky-top'>
        {this.props.selectedSpell != null ? (
          <>
            <SpellInfo spell={this.props.selectedSpell}/>
            <AddSpellForm />
          </>
        ) : null}
      </div>
    )
  }
}
