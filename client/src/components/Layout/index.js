import React from "react";
import {Nav, Footer} from '../index.js'

const Layout = ({ children }) => {
  return (
    <main>
      <Nav/>
      <section> {children}</section>
      <Footer/>
    </main>
  );
};

export default Layout;
