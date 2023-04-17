import React from "react";
import {Nav} from '../index.js'

const Layout = ({ children }) => {
  return (
    <main>
      <section> {children}</section>
    </main>
  );
};

export default Layout;
