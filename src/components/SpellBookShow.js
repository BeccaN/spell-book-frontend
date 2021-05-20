import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellInfo from './SpellInfo'
import {deleteSpellBook} from '../actions/deleteSpellBook'


class SpellBookShow extends Component {  

  handleClick = (e) => {
    this.props.deleteSpellBook(e.target.value, this.props.history)
  }
  
  render() {
    const spell_book = this.props.spell_books.find(book => book.id === parseInt(this.props.match.params.id))

    return (
      <div>
        <div className="d-flex">
          {spell_book ? <><h1>{spell_book.title}</h1></>
          : null}
        </div>  
        
        {spell_book ? 
          <>
            <div className="spells">

              {spell_book.spells.map(spell => <div className="spell" key={spell.id}><SpellInfo spell={spell} spell_book_id={spell_book.id} /></div>)}
            </div>
          
            <div>
              <button onClick={this.handleClick} value={spell_book.id}>Delete Spell Book</button>
            </div>
          </>
        : null}
      </div>  
    ) 
  }
}

const mapStateToProps = state => {
  return {
    spell_books: state.spell_books.spell_books,
    user: state.user.user
  }
}

export default connect(mapStateToProps, {deleteSpellBook})(SpellBookShow)