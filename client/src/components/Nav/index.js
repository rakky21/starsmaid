import React from "react";
import { Link} from "react-router-dom"

const Nav = () => {
  return (
    <section className="section_nav">
      <h1 className="title_nav">
        Stars<span className="maid">Maid</span> Renovations Inc
      </h1>
      <div className="container_nav">
        <ul className="ul_login">
          <li>
            <Link>
              <a href="login"> Login</a>
            </Link>
          </li>

          {/* IF LOGGED IN DISPLAY THIS */}
          {/* <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li> */}

          <li>
            <a href="Signup"> SignUp</a>
          </li>
        </ul>
      </div>
      <div className="container_navdos">
        <ul className="ul_nav">
          <li>
            <Link>
              <a href="home">Home</a>
            </Link>
          </li>
          <li>
            <Link>
              <a href="bundles">Bundles</a>
            </Link>
          </li>
          <li>
            <Link>
              <a href="appointments">Appointments</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;
