import React from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

function Leaderboard({ users }) {
  return (
    <div className='l-container'>
      <div className='l-sub-container'>
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              <UserStats user={user} rank={index + 1} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort((a, b) => {
    const total_a = Object.keys(a.answers).length + a.questions.length
    const total_b = Object.keys(b.answers).length + b.questions.length
    return total_b - total_a
  }),
})

export default connect(mapStateToProps)(Leaderboard)
