import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteSpellSpellBook} from '../actions/deleteSpellSpellBook'


class DeleteSpellInput extends Component {

  handleClick = (e) => {
    let join = this.props.spell_spell_books.find(join => join.spell_id === this.props.spell_id && join.spell_book_id === this.props.spell_book_id)
    this.props.deleteSpellSpellBook(join)
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