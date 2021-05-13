import React, { Component } from 'react'
import SpellInfo from './components/SpellInfo'
import SpellContainer from './components/SpellContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import { fetchSpells } from './actions/fetchSpells'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchSpells()
  } 

  render() {
    return (
      <div className="mx-4">
        <header>
          <h1>Spell Journal</h1>
        </header>
        <div className="row">
          {this.props.spells.spells.length}
          <SpellContainer spells={this.props.spells.spells} />
          <SpellInfo />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spells: state.spells
  }
}

export default connect(mapStateToProps, {fetchSpells})(App)