import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    const { handleSelect, handleSubmit, location } = this.props
    return (
      <form className='login-container' onSubmit={(e) => handleSubmit(e, location.pathname)}>
        <label className='label' htmlFor='users'>
          <h3>Login with a User</h3>
        </label>
        <select
          onChange={(e) => handleSelect(e.target.value)}
          className='dropdown'
          name='users'
          id='users'
        >
          <option value='sarahedo'>Sarah Edo</option>
          <option value='tylermcginnis'>Tyler McGinnis</option>
          <option value='dan_abramov'>Dan Abramov</option>
        </select>
        <button className='btn'>Submit</button>
      </form>
    )
  }
}

export default connect()(Login)
