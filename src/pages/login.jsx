import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import loginImage from "../assets/codingexpo.png";
import API from "../BaseApi";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await fetch("http://localhost:5000/api/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       // localStorage.setItem("loggedInUser", JSON.stringify(data));
  //       localStorage.setItem("loggedInUser", JSON.stringify(data.user));

  //       if (data.token) {
  //         localStorage.setItem("authToken", data.token);
  //       }

  //       navigate("/admin-panel");
  //     } else {
  //       alert(data.message || "Invalid Email or Password!");
  //     }
  //   } catch (err) {
  //     console.error("Login error:", err);
  //     alert("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });
      const data = res.data;
      localStorage.setItem("loggedInUser", JSON.stringify(data.user));

      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }

      navigate("/admin-panel");
    } catch (err) {
      console.error("Login error:", err);

      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
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
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
