import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteSpellSpellBook} from '../actions/deleteSpellSpellBook'


class DeleteSpellInput extends Component {
  
  handleClick = (e) => {
    
    this.props.deleteSpellSpellBook(this.props.spell_spell_book[0])
  }
  
  render() {
    
    return (
      <div>
        <button onClick={this.handleClick}>Delete Spell</button>
      </div>
    )
  }
}


export default connect(null, {deleteSpellSpellBook})(DeleteSpellInput)