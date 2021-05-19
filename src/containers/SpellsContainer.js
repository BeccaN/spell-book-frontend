import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellInfo from '../components/SpellInfo'
import AddSpellToSpellBook from '../components/forms/AddSpellToSpellBook'
import SpellTable from '../table/SpellTable'


import { fetchSpells } from '../actions/fetchSpells'

class SpellsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSpell: null
    }
  }

  componentDidMount() {
    this.props.fetchSpells() 
  }
  
  handleSelect = (data) => {
    this.setState({
      selectedSpell: data
    })
  }

  render() {
    return (
      <div className="row">
        <div className='col-md border p-3 m-2 bg-light shadow h-100'>
          {this.state.selectedSpell != null ? (
            <>
              <SpellInfo spell={this.state.selectedSpell}/>
              <AddSpellToSpellBook spell={this.state.selectedSpell} />
            </>
          ) : null}
        </div>
        
        <div className='col-md p-3 m-2 border bg-light shadow'>
          {this.props.spells.length === 0 ? (
              null                
              ) : <SpellTable spells={this.props.spells} handleSelect={this.handleSelect} />
          }            
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      spells: state.spells.spells
  }
}

export default connect(mapStateToProps, {fetchSpells})(SpellsContainer)