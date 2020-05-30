import React from 'react'

function Login({handleSelect, handleSubmit}) {
  return (
      <form className='login-container' onSubmit={(e) => handleSubmit(e)}>
        <label className='label' htmlFor='users'>
          <h3>Select a User</h3>
        </label>
        <select onChange={(e) => handleSelect(e.target.value)} className='dropdown' name='users' id='users'>
          <option value='sarahedo'>Sarah Edo</option>
          <option value='tylermcginnis'>Tyler McGinnis</option>
          <option value='dan_abramov'>Dan Abramov</option>
        </select>
        <button className='btn'>Submit</button>
      </form>
  )
}

export default Login
