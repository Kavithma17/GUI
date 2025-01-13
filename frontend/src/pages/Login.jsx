import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

   const [values ,setValues ] = useState({
    email: '',
    password:''
   })
   const handleSubmit =(event) => {
     event.preventDefault();
   }


  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form action='' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email"
            onChange={handleInput} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password"
            onChange={handleInput} />
          </div>
          <button type="submit" className="login-button">Log in</button>
          <p className="terms">You agree to our terms and policies</p>
          <Link to="/signup" className='create-acc'> Create New Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
