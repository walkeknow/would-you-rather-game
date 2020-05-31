import React from 'react'

function UserStats({ user, rank }) {
  if (user) {
    const { name, avatarURL, answers, questions } = user
    return (
      <div className='user-stats'>
        <img className='avatar-stat' src={avatarURL} alt='avatar'></img>
        <div className='rank-container'>
          <div className='rank'>{rank}</div>
          <div className='rank-name'>{name}</div>
        </div>
        <div className='stats'>
          <div>
            <strong>Asked: </strong>
            {questions.length}
          </div>
          <div>
            <strong>Answered: </strong>
            {Object.keys(answers).length}
          </div>
        </div>
        <div className='stats-total'>
          <div>Total</div>
          <div>{questions.length + Object.keys(answers).length}</div>
        </div>
      </div>
    )
  }
  return null
}

export default UserStats
