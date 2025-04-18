import React, { useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import './SignIn.css';
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Google Sign-In success handler
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google User:", decoded);

      // ✅ Send to backend
      const res = await axios.post("http://localhost:8083/auth/google", decoded);
      console.log("Backend Response:", res.data);
    } catch (err) {
      console.error("Google Login Error:", err);
    }
  };

  // ✅ Manual login (email/password)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    const response = await axios.post("http://localhost:8083/admin/user", {
      email,
      password
    });
    console.log(response.data);
  };

  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <h2>Sign In</h2>

          {/* ✅ Google Sign-In Button */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log('Google Login Failed');
            }}
          />

          <div className="separator">or</div>

          {/* ✅ Email/Password Form */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button className="button" type="submit">Sign In</button>
            <p className="forgot-password">
              <a href="#">Forgot password?</a>
            </p>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to={"/signup"}>SIGN UP</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
