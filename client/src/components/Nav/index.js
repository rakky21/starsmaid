import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="nav_nav">
      <h1 className="title_nav">
        Stars<span className="maid">Maid</span> Renovations Inc
      </h1>
      <div className="container_nav">
        <ul className="ul_login">
          <a href="/" onClick={logout}>
            Loggout
          </a>
          <Link to="/login" onClick={() => Login}>
            {" "}
            Login
          </Link>
          <Link to="/signup"> SignUp</Link>
        </ul>
      </div>
      <div className="container_navdos">
        <ul className="ul_nav">
          <Link to="/">Home</Link>
          <Link to="/bundles">Bundles</Link>
          <Link to="/appointments">Appointments</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
