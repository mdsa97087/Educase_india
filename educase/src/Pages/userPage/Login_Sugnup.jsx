import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./style.css";

function Login_Sugnup() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <Header />
      <div className="btnSection">
        <button
          type="button"
          className={login ? "userbtn active" : "userbtn"}
          onClick={() => setLogin(true)}
        >
          Login
        </button>
        <button
          type="button"
          className={!login ? "userbtn active" : "userbtn"}
          onClick={() => setLogin(false)}
        >
          Signup
        </button>
      </div>
      <form className="form">
        <input
          className="inputSection"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="inputSection"
          type="password"
          placeholder="Password"
        />
        {!login && (
          <input
            className="inputSection"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <button type="button" id="btn" className="inputSection">
          {login ? "LOGIN" : "SIGNUP"}
        </button>
        {login && (
          <a href="">
            <p className="forgot">Forgot Password?</p>{" "}
          </a>
        )}
        <p className="">{login ? "or login with" : "or signup with"}</p>
      </form>
      <Footer />
    </div>
  );
}

export default Login_Sugnup;
