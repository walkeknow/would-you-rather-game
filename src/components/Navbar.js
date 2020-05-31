import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export function Navbar({ handleLogout, user }) {
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
        <li>
          {user && <span className='u-name'> Welcome, {user.name}!</span>}
        </li>
        <li className='btn-logout' onClick={() => handleLogout()}>
          Logout
        </li>
      </ul>
    </nav>
  )
}

export default connect(({ authedUser, users }) => ({
  user: Object.values(users).filter((user) => user.id === authedUser)[0],
}))(Navbar)
