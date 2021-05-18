import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import SpellsContainer from './containers/SpellsContainer'
import SpellBooksContainer from './containers/SpellBooksContainer'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  return (
    <div className="mx-4">
      <Navbar />
      <Route exact path="/" component={SpellsContainer} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <SpellBooksContainer />
    </div>
  )
}

export default App