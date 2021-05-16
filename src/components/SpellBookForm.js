import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSpellBook} from '../actions/addSpellBook'

class SpellBookForm extends Component {
  state = {
    title: ""
  }
  
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addSpellBook(this.state)
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Spell Book Title" value={this.state.title} onChange={this.handleChange}/>
          <input type="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addSpellBook})(SpellBookForm)