import React, { Component } from 'react'
import { connect } from 'react-redux'
import CollapsibleDesc from './Spell/CollapsibleDesc'
import {deleteSpellBook} from '../actions/deleteSpellBook'
import {Redirect} from 'react-router-dom'
import DeleteSpellInput from './Spell/DeleteSpellInput'
import './Spell/spell.css'

class SpellBookShow extends Component {  
  handleClick = (e) => {
    this.props.deleteSpellBook(e.target.value, this.props.history)
  }
  
  spell_book = this.props.spell_books.find(book => book.id === parseInt(this.props.match.params.id))

  checkSpellbook = () => {
    if (this.spell_book) {
      
      this.spell_book.spells.sort((a, b) => a.level > b.level && 1 || -1)
      
      return (
        <>
          <div className="d-flex justify-content-between align-items-end mb-2">
            <><h1>{this.spell_book.title}</h1><h4>user: {this.spell_book.username}</h4></>
          </div>  
      
          <div className="spells">
            
            {this.spell_book.spells.map(spell => 

            <div className="styled-con p-2 m-1" key={spell.id}>

              <div className="d-flex justify-content-between">
                <h3><strong>{spell.name}</strong></h3>
                <DeleteSpellInput spell_id={spell.id} spell_book_id={this.spell_book.id} />
              </div>

              <CollapsibleDesc spell={spell}/>

            </div>

            )}
          </div>
        
          <div className="mt-4">
            <button className="form-btn p-1" onClick={this.handleClick} value={this.spell_book.id}>Delete Spell Book</button>
          </div>


        </>
      )
    } else {
      return (<Redirect to="/spellbooks" />)
    }
  }

  render() {
    
    return (
      <div>
         {this.checkSpellbook()}
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