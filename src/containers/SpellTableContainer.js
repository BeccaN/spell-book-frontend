import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellTable from '../table/SpellTable'
import { fetchSpells } from '../actions/fetchSpells'

class SpellContainer extends Component {
    componentDidMount() {
        this.props.fetchSpells() 
    }
    
    render() {
        return (
            <div className='col-md p-3 m-2 border bg-light shadow'>
                {this.props.spells.length === 0 ? (
                    null                
                    ) : <SpellTable spells={this.props.spells} handleSelect={this.props.handleSelect} />
                }            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        spells: state.spells.spells
    }
}

export default connect(mapStateToProps, {fetchSpells})(SpellContainer)
