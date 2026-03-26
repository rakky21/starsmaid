import React from "react";
import { Layout } from "../components";
import { Outlet } from "react-router-dom";

const NoMatch = ({ children }) => {
  return (
    <Layout>
      <h1>ERROR 404, <br/>
        Page not found</h1>
      <Outlet />
    </Layout>
  );
};

export default NoMatch;
