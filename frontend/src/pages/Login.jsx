import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from './LoginValidation';
import './Login.css';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleInput}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <button type="submit" className="login-button">
            Log in
          </button>
          <p className="terms">You agree to our terms and policies</p>
          <Link to="/signup" className="create-acc">
            Create New Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
