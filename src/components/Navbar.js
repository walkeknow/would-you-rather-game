import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            Create Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}