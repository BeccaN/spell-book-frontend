import React, { Component } from 'react'
import SpellInfoContainer from './SpellInfoContainer'
import SpellTableContainer from './SpellTableContainer';

export default class SpellsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSpell: null
    }
  }
  
  handleSelect = (data) => {
    this.setState({
      selectedSpell: data
    })
  }

  render() {
    return (
      <div className="row">
        <SpellTableContainer handleSelect={this.handleSelect}/>
        <SpellInfoContainer selectedSpell={this.state.selectedSpell} />
      </div>
    )
  }
}