import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import loginImage from "../assets/codingexpo.png";
import users from "./admin/user";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find user from static data
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Save user in localStorage (so it can be shown in sidebar later)
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/admin-panel");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-content">
          <h1>
            <i>Admin Login</i>
          </h1>
          <p>
            <i>
              Welcome.
              <br /> Start your journey now with our management system!
            </i>
          </p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-form-box">
          <div className="logo-image">
            <Link to="/">
              <img src={loginImage} alt="Login Visual" />
            </Link>
          </div>
          <h2>Login</h2>
          <p>Enter your email address and password to log in.</p>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-extra">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
