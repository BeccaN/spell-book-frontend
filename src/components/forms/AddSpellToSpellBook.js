import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSpellSpellBook} from '../../actions/addSpellSpellBook'

class AddSpellForm extends Component {
  state = {
    spell_book_id: null,
    spell_id: this.props.spell.id
  }

  handleChange = (e) => {
    this.setState({
      spell_book_id: parseInt(e.target.value)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addSpellSpellBook(this.state)
  }
  
  render() {
    return (
      <div className="container mt-3">
        <form onSubmit={this.handleSubmit}>
          <select name="spell_book" id="spell_book" onChange={this.handleChange}>
            <option value="none" selected disabled hidden>Select Spell Book</option>
            {this.props.spell_books.map(book => <option value={book.id}>{book.title}</option>)}
          </select>
          <button type="Submit" className="btn btn-primary btn-sm">+ Spell to Book</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      spell_books: state.spell_books.spell_books
  }
}

export default connect(mapStateToProps, {addSpellSpellBook})(AddSpellForm)