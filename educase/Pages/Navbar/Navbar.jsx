import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="linkSection2">
        <Link id="linkSection2" className="linkSection" to="/login">Login
        </Link>
      </div>
      <Link className="linkSection" to="/signup">
        Signup
      </Link>
    </nav>
  );
}

export default Navbar;
