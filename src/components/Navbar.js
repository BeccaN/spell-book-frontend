import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="navbar navbar-default navbar-static-top d-flex align-items-end justify-content-between bg-primary">
      <div>
        <h1>Spell Book App</h1>
      </div>
      <div>
        <NavLink to="/" exact style={{color: 'black', textDecoration: 'none'}} >Spells</NavLink>{" | "}
        {(props.user) ? 
        <>
          <NavLink to="/spellbooks" exact style={{color: 'black', textDecoration: 'none'}} >Spell Books</NavLink>{" | "}
          <button className="logout" onClick={props.logOutHandler} style={{color: 'black', textDecoration: 'none'}} >Logout</button>
        </>
        :   
        <>      
          <NavLink to="/signup" exact style={{color: 'black', textDecoration: 'none'}} >Signup</NavLink>{" | "}
          <NavLink to="/login" exact style={{color: 'black', textDecoration: 'none'}} >Login</NavLink>{" | "}
        </>
        }
      </div>
    </div>
  )
}