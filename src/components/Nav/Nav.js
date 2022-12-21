import React from "react";

const Nav = () => {
  return (
    <section className="section_nav">
      <h1 className="title_nav">
        Stars<span className="maid">Maid</span> Renovations Inc
      </h1>
      <div className="container_nav">
        <ul className="ul_login">
          <li>
            <a href="#login"> Login</a>
          </li>
          <li>
            <a href="#signup"> SignUp</a>
          </li>
        </ul>
      </div>
      <div className="container_navdos">
        <ul className="ul_nav">
          <li>
            <a href="#anchor_home">Home</a>
          </li>
          <li>
            <a href="#anchor_appointments">Appointments</a>
          </li>
          <li>
            <a href="#anchor_media">Bundles</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;
