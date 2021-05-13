import React, {useState, useEffect} from 'react';
import SpellInfo from './components/SpellInfo'
import SpellContainer from './components/SpellContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import { fetchSpells } from './actions/fetchSpells'

function App(props) {
  const [spells, setSpells] = useState(null)
  const [selectedSpell, setSelectedSpell] = useState(null)

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/api/v1/spells'
    fetch (apiUrl)
      .then((resp) => resp.json())
      .then((data) => setSpells(data))
  }, [])

  // useEffect(() => {
  //   props.fetchSpells()
  // })

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
        <SpellContainer spells={spells} handleSelect={handleSelect}/>
        <SpellInfo selectedSpell={selectedSpell} />
      </div>
    </div>
  )
}

export default connect(null, {fetchSpells})(App)