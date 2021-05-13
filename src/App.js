import React, {useState} from 'react';
import SpellInfo from './components/SpellInfo'
import SpellContainer from './components/SpellContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import { fetchSpells } from './actions/fetchSpells'
import Navbar from './components/Navbar'

function App() {
  const [selectedSpell, setSelectedSpell] = useState(null)

  const handleSelect = (data) => {
    setSelectedSpell(data)
  }

  return (
    <div className="mx-4">
      <Navbar />

      <div className="row">
        <SpellContainer handleSelect={handleSelect}/>
        <SpellInfo selectedSpell={selectedSpell} />
      </div>
    </div>
  )
}

export default connect(null, {fetchSpells})(App)