import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellTable from './table/SpellTable'

class SpellContainer extends Component {
    render() {
        return (
            <div className='col-md p-3 m-2 border bg-light shadow'>
                {this.props.spells != null ? (
                    <SpellTable spells={this.props.spells} handleSelect={this.props.handleSelect} />
                ) : null}
            </div>
        )
    }
}

export default SpellContainer