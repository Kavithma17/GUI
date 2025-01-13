import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from './SignupValidation';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              value={values.name}
              onChange={handleInput}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

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

          <button type="submit" className="signup-button">Sign Up</button>
          <p className="terms">You agree to our terms and policies</p>
          <Link to="/login" className="login-link">Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
