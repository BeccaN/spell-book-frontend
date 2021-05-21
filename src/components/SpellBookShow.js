import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellInfo from './SpellInfo'
import {deleteSpellBook} from '../actions/deleteSpellBook'
import {Redirect} from 'react-router-dom'


class SpellBookShow extends Component {  
  handleClick = (e) => {
    this.props.deleteSpellBook(e.target.value, this.props.history)
  }
  
  spell_book = this.props.spell_books.find(book => book.id === parseInt(this.props.match.params.id))

  render() {
  
    return (
      <div>
        {this.spell_book ? 
          <>
            <div className="d-flex justify-content-between align-items-end">
              <><h1>{this.spell_book.title}</h1><h4>{this.spell_book.username}</h4></>
            </div>  
        
            <div className="spells">
              {this.spell_book.spells.map(spell => <div className="spell" key={spell.id}><SpellInfo spell={spell} spell_book_id={this.spell_book.id} /></div>)}
            </div>
          
            <div>
              <button onClick={this.handleClick} value={this.spell_book.id}>Delete Spell Book</button>
            </div>
          </>
        : <Redirect to="/spellbooks" /> 
        }
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