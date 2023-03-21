import React from "react";
import logo from "./logo.svg";

function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="headerText">
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
      </header>
    </div>
  );
}

export default Header;
