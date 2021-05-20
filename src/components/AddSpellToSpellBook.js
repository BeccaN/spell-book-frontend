import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSpellSpellBook} from '../actions/addSpellSpellBook'

class AddSpellToSpellBook extends Component {
  state = {
    spell_book_id: null
  }

  handleChange = (e) => {
    this.setState({
      spell_book_id: parseInt(e.target.value)
    })
  }

  handleClick = () => {
    this.props.addSpellSpellBook({spell_book_id: this.state.spell_book_id, spell_id: this.props.spell.id})
  }

  userSpellBooks = (this.props.spell_books) ? this.props.spell_books.filter(book => book.user_id === this.props.user.id) : null

  render() {
    
    return (
      <div className="container mt-3">
        <select name="spell_book" id="spell_book" onChange={this.handleChange}>
          <option value="none" selected disabled hidden>Select Spell Book</option>

          {(this.userSpellBooks) ? this.props.spell_books.map(book => <option value={book.id} key={book.id}>{book.title}</option>)
          : null }

        </select>
        <button type="Submit" className="btn btn-primary btn-sm" onClick={this.handleClick}>+ Spell to Book</button>
        {
        (this.props.error !== "") ? 
        <p>{this.props.error}</p>
        : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      spell_books: state.spell_books.spell_books,
      error: state.spell_spell_books.error
  }
}

export default connect(mapStateToProps, {addSpellSpellBook})(AddSpellToSpellBook)