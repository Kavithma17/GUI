import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "./LoginValidation"; 
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    const validationErrors = validateLogin(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);

        
        if (result.data === "Success") {
          setLoginError(""); 
          setEmail("");
          setPassword("");
          setErrors({}); 
          alert("Login successful!"); 

          
          setTimeout(() => {
            navigate("/appointment"); 
          }, 2000);
        } else {
          
          setLoginError("Invalid credentials, please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError("Something went wrong, please try again later.");
      });
  };

  return (
    <div className="login">
      <div className=" login-text"><p> Before make your appointment Please make sure to log in.</p>
      </div>
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
              value={email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="log-box">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="log-button">
            <button type="submit" className="log-buttun1">
              Log in
            </button>
          </div>

         
          {loginError && <p className="error">{loginError}</p>}

          <p className="not-register">
            If you don't have an account <a href="/signup">Sign up?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
