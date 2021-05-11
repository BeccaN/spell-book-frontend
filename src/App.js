import React, {useState, useEffect} from 'react';
import SpellInfo from './components/SpellInfo'
import SpellContainer from './components/SpellContainer';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  
  const [spells, setSpells] = useState(null)

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/api/v1/spells'
    fetch (apiUrl)
      .then((resp) => resp.json())
      .then((data) => setSpells(data))
  }, [])

  return (
    <div className="App">
      <Button>Testing</Button>
      <header>
        <h1>Spell Journal</h1>
      </header>
      <div className="content">
        <SpellContainer spells={spells} />
        <SpellInfo />
      </div>
    </div>
  )
}