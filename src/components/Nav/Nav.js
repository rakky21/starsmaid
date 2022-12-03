import React from "react";

const Nav = () => {
  return (
    <section className="section_nav">
      <h1 className="title_nav">
        Stars<span className="maid">Maid</span> Inc
      </h1>
      <div className="list_nav">
        <ul>
          <li>
            <a href="#anchor_home">Home</a>
          </li>
          <li>
            <a href="#anchor_appointments">Appointments</a>
          </li>
          <li>
            <a href="#anchor_media">Media</a>
          </li>
        </ul>
        <ul className="ul_login">
          <li>
            <a> Login</a>
          </li>
          <li>
            <a> SignUp</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;
