import React from 'react'

function Form() {
  return (
    <div className='main'>
      <p className='sign' align="center">
      Sign in 
      </p>
      <form className='Form1'>
      <input className='username' type='text' placeholder='Username'></input>
      <input className='password' type='password' placeholder='Password'></input>
      <button type="button" class="btn btn-secondary">Sign in</button>
      <p className='forgot' align="center">
      <a href='#'>Forgot Password?..</a>

      </p>
      </form>
    </div>
  )
}

export default Form;