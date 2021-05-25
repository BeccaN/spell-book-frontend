import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="navbar navbar-default navbar-static-top d-flex align-items-end justify-content-between">
      {/* <div className="d-flex align-items-end">
        <img src="spellbook.png" alt="Spellbook logo" className="logo" />
        <h1 className="d-flex align-items-end ml-3">RPG Spellbook</h1>
      </div> */}
      <div><h1 className="">RPG Spellbook</h1></div>
      
      <div>
        <NavLink to="/" exact >Spells</NavLink>{" | "}
        {(props.user) ? 
        <>
          <NavLink to="/spellbooks" exact >Spell Books</NavLink>{" | "}
          <button className="logout" onClick={props.logOutHandler} >Logout</button>
        </>
        :   
        <>      
          <NavLink to="/login-signup" exact >Login / Signup</NavLink>
        </>
        }
      </div>
    </div>
  )
}