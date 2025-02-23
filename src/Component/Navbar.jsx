import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Navbar.css";  

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="container-h1">Mock Interview</h1>
          <nav className="container-nav">
            <div className="nav-usediv">
              <button className="dashboard" onClick={() => navigate("/sign")}>
            Sign In 
          </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
