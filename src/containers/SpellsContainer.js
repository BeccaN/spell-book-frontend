import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddSpellToSpellBook from '../components/AddSpellToSpellBook'
import SpellTable from '../table/SpellTable'
import SpellDetails from '../components/Spell/SpellDetails'

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
      <div className="m-1 row">
        <div className='styled-con col-md p-3 m-2 bg-light h-100'>
          {this.state.selectedSpell != null ? (
            <>
              <div className="">
                <h3><strong>{this.state.selectedSpell.name}</strong></h3>
                <div className="row">
                  <div className="col">
                    Class: <strong>{this.state.selectedSpell.dnd_class}</strong>
                  </div>
                </div>

                <SpellDetails spell={this.state.selectedSpell}/>

                <hr className="solid"></hr>

                <div className="mt-2">        
                  <div dangerouslySetInnerHTML={{__html: this.state.selectedSpell.desc}} />
                  <div dangerouslySetInnerHTML={{__html: this.state.selectedSpell.higher_lvl}} />
                </div>

                <small>Book Page: {this.state.selectedSpell.page}</small>
              </div>
              
            {(this.props.user) ? <AddSpellToSpellBook spell={this.state.selectedSpell} user={this.props.user}/>
            : 
            <div className="center">
              <small>Please either log into your account, or go to 'Spellbooks' in the nav bar and create your first spellbook!</small>
            </div>
            }

            </>
          ) : null}
        </div>
        
        <div className='styled-con col-md m-2 bg-light spell-table'>
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