import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "./logo-1.png";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      {/* <Head /> */}
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <a href="">
                <img className="imgnav" src={logo} alt="" />
              </a>
            </li>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses">Oppurtunities</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/journal">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
