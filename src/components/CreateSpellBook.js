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
    this.props.addSpellBook({title: this.state.title, user_id: this.props.user.id})
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <div className="m-3 d-flex justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Spell Book Title" value={this.state.title} onChange={this.handleChange}/>
          <input type="Submit" className="form-btn m-3" readOnly value="Create Spell Book" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addSpellBook})(SpellBookForm)