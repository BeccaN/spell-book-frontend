import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar navbar-default navbar-static-top">
      <nav>
        <h1>Spell Book App</h1>
        <NavLink to="/" exact>Spells</NavLink>{" | "}
        <NavLink to="/spellbooks" exact>Spell Books</NavLink>{" | "}
        <NavLink to="/signup" exact>Signup</NavLink>{" | "}
        <NavLink to="/login" exact>Login</NavLink>
      </nav>
    </div>
  )
}