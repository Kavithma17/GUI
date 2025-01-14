import React, { Component, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Signup.css';


export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()
 

  const handleSubmit = (e) => {
    
      e.preventDefault();
     
      axios.post("http://localhost:3001/register", {fname, lname, email, password})
        .then((result) => {console.log(result)
        navigate('/login')

      })
       .catch (err=> console.log(err))

        
        
    }
  

  return (
    <div className="signup">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h3>Sign up</h3>
         
          
          

          <div className="signup-box">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="signup-box">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="signup-box">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signup-box">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="signup-button">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="signup-text">
            Already have an account <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}