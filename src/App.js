import React, {useState} from 'react';
import SpellInfo from './components/SpellInfo'
import SpellContainer from './components/SpellContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import { fetchSpells } from './actions/fetchSpells'

function App() {
  const [selectedSpell, setSelectedSpell] = useState(null)

  const handleSelect = (data) => {
    setSelectedSpell(data)
  }

  return (
    <div className="mx-4">
      <header>
        <h1>Spell Journal</h1>
      </header>
      <div className="row">
        {}
        <SpellContainer handleSelect={handleSelect}/>
        <SpellInfo selectedSpell={selectedSpell} />
      </div>
    </div>
  )
}

export default connect(null, {fetchSpells})(App)