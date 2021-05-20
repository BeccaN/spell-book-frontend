import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteSpellSpellBook} from '../actions/deleteSpellSpellBook'


class DeleteSpellInput extends Component {

  //spell_id
  //spell_book_id
  //I NEED SPELL SPELL BOOK ID

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

const mapStateToProps = state => {
  return {
    spell_spell_books: state.spell_spell_books.spell_spell_books
  }
}

export default connect(mapStateToProps, {deleteSpellSpellBook})(DeleteSpellInput)