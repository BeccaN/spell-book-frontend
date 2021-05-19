import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

import Navbar from './components/Navbar'
import SpellsContainer from './containers/SpellsContainer'
import SpellBooksContainer from './containers/SpellBooksContainer'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  let history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:8000/api/v1/profile", {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then ((resp) => resp.json())
      .then ((data) => console.log(data))
    } else {
      history.push('/')
    }
  }, [])



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