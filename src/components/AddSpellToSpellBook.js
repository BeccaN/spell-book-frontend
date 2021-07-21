import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSpellSpellBook} from '../actions/addSpellSpellBook'

class AddSpellToSpellBook extends Component {
  state = {
    spell_book_id: null,
    timedError: ""
  }

  handleChange = (e) => {
    this.setState({
      spell_book_id: parseInt(e.target.value)
    })
  }

  handleClick = () => {
    this.props.addSpellSpellBook({spell_book_id: this.state.spell_book_id, spell_id: this.props.spell.id})
  }

  handleError = () => {
    this.setState({
      timedError: this.props.error
    })
  }

  render() {
    
    // const userSpellBooks = (this.props.spell_books) ? this.props.spell_books.filter(book => book.user_id === this.props.user.id) : null

    return (
      <div className="container mt-3">
      {(this.props.spell_books === []) ? 
        <>
          <div className="d-flex justify-content-around">
            
            <select className="p-1" name="spell_book" id="spell_book" onChange={this.handleChange}>
              <option value="none" selected disabled hidden>Select Spell Book</option>
              {this.props.spell_books.map(book => <option value={book.id} key={book.id}>{book.title}</option>)}
            </select>
            
            <button type="Submit" className="p-1 form-btn" onClick={this.handleClick}>+ Spell to Spellbook</button>
            
          </div>
          <div className="center mt-2 error">
            {
            (this.props.error !== "") ? 
            <>
              {this.props.error}
            </>
            : null
            }
          </div>
        </>
      : <small>Please either log into your account, or go to 'Spellbooks' in the nav bar and create your first spellbook!</small> }
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