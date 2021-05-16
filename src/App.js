import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import SpellsContainer from './containers/SpellsContainer'
import SpellBooksContainer from './containers/SpellBooksContainer'

import SpellBooks from './components/SpellBooks';
import SpellBookShow from './components/SpellBookShow'

function App() {

  return (
    <div className="mx-4">
      <Navbar />
      <Route exact path="/" component={SpellsContainer} />
      <SpellBooksContainer />
      {/* If passing props into Route, change component to render function {() => <SpellBooks books={this.props.books} />} */}
    </div>
    
  )
}

export default App