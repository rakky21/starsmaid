  import React from "react";
import { Layout , ContactUs} from "../components";
import { Outlet } from "react-router-dom";

const About = ({ children }) => {
  return (
    <Layout>
      <ContactUs />
      <Outlet />
    </Layout>
  );
};

export default About;
