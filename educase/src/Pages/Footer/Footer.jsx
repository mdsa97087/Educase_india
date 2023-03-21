import React from "react";

function Footer({ signUpBtn }) {
  return (
    <div>
      <img
        className="logo"
        src="https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png?f=avif&w=30"
        alt="google"
      />
      <img
        className="logo"
        src="https://cdn.iconscout.com/icon/free/png-256/facebook-263-721950.png?f=avif&w=30"
        alt="facebook"
      />
      <img
        className="logo"
        src="https://cdn.iconscout.com/icon/free/png-256/twitter-241-721979.png?f=avif&w=30"
        alt="twitter"
      />
      <br />
      <br />
      <p className="">
        Don't have an Account?
        <span
          onClick={signUpBtn}
          style={{
            color: "rgb(241, 3, 154)",
            cursor: "pointer",
          }}
        >
          Create new now!
        </span>
      </p>
      <br />
      <p className="">
        By signing up, you are agree with our
        <span
          style={{
            color: "rgb(241, 3, 154)",
            cursor: "pointer",
          }}
        >
          Term & Conditions
        </span>
      </p>
    </div>
  );
}

export default Footer;
