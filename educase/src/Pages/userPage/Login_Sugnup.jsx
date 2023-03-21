import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./style.css";

function Login_Sugnup() {
  const [login, setLogin] = useState(true);

  const signUpBtn = () => {
    setLogin(false);
  };

  return (
    <div>
      {/*  ---------------       Header Section     --------------------- */}
      <Header />

      {/*   ----------   LOGIN SIGNUP CELECTION  BUTTON     -------- */}
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
          onClick={signUpBtn}
        >
          Signup
        </button>
      </div>

      {/*   --------         FORM SECTION       --------- */}
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
      {/*   -----------------    Footer Section       --------------  */}
      <Footer signUpBtn={signUpBtn} />
    </div>
  );
}

export default Login_Sugnup;
