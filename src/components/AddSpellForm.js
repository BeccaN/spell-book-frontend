import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddSpellForm extends Component {
  render() {
    return (
      <div className="container mt-3">
        <form>
          <select name="spell_book" id="spell_book">
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

export default connect(mapStateToProps)(AddSpellForm)
