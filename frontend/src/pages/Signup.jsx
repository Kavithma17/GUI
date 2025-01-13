import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <button type="submit" className="login-button">Sign Up</button>
          <p className="terms">You agree to our terms and policies</p>
          <Link to="/login" className='create-acc'> Log in </Link>
          
        </form>
      </div>
    </div>
  )
}

export default Signup