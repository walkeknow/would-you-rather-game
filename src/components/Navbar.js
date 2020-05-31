import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ handleLogout }) {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            Create Question
          </NavLink>
        </li>
        <li className='btn-logout' onClick={() => handleLogout()}>
          Logout
        </li>
      </ul>
    </nav>
  )
}
