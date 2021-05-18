import React, { Component } from 'react'
import SpellInfo from './SpellInfo'

class SpellBookShow extends Component {
  state = {
    search: ""
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {

    const spell_book = this.props.spell_books.find(book => book.id === parseInt(this.props.match.params.id))
  
    let spells = (spell_book) ? spell_book.spells.sort(function(a, b) {
      return a.level - b.level
    }) : null

    return (
      <div>
        <div className="d-flex">
        {spell_book ? <h1>{spell_book.title}</h1> : null}
        <input onChange={this.handleChange} value={this.state.search} />
        </div>
        {spell_book ? 
          <div className="spells">
            {spells.map(spell => <div className="spell" key={spell.id}><SpellInfo spell={spell} spell_book_id={spell_book.id} spell_spell_books={this.props.spell_spell_books} /></div>)}
          </div>
        : null}
      </div>
    )
  }
}

export default SpellBookShow