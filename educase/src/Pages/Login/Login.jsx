import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="mainDiv">
      <form action="" className="form">
        <input
          className="inputSection"
          type="email"
          name="email"
          required
          placeholder="Email Address"
        />
        <input
          className="inputSection"
          type="passwordr"
          name="password"
          required
          placeholder="Password"
        />
        <button className="btn" type="submit">
          LOGIN
        </button>
      </form>
      <div>
        <p className="forgot">Forgot Password?</p>
      </div>
      <br />
      <br />
      <div>
        <p>or login with</p>
      </div>
      <div style={{
            gap:"50px"
      }}>
            <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png?f=avif&w=30" alt="google" />
            <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/facebook-263-721950.png?f=avif&w=30" alt="facebook" />
            <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/twitter-241-721979.png?f=avif&w=30" alt="twitter" />

      </div>
    </div>
  );
}

export default Login;
