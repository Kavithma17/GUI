import React, { Component, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import LoginValidation from './LoginValidation';
import './Login.css';

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()
 

  const handleSubmit = (e) => {
    
      e.preventDefault();
     
      axios.post("http://localhost:3001/login", { email, password})
        .then((result) => {
          console.log(result)
            
          if (result.data == "Success") {
            navigate("/"); // Navigate to the home page
          } else {
            alert("Login failed. Please check your credentials. ");
          }

       

      })
       .catch (err=> console.log(err))

        
        
    }
  

  return (
    <div className="login">
      <div className="log-container">
        <form onSubmit={handleSubmit}>
          <h3>Log in</h3>
         

          <div className="log-box">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="log-box">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="log-button">
            <button type="submit" className="log-buttun1">
             Log in
            </button>
          </div>
          <p className="not-register">
            If you don't have an account <a href="/signup">Sign up?</a>
          </p>
        </form>
      </div>
    </div>
  );
}