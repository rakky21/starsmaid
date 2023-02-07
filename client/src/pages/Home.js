import React, { useState } from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_APPOINTMENTS } from "../utils/queries";
import Schedule from "../components/Schedule";
import Bundle from "../components/Bundle";

const {
  aboutfotografia,
  colorpanels,
  secondoBackground,
  planos,
} = require("../assets/images/index.js");

const Home = () => {
  const { loading, data } = useQuery(QUERY_APPOINTMENTS);
  const appointments = data?.appointments || [];

  const loggedIn = Auth.loggedIn();

  const [bundles, setBundles] = useState([
    {
      id: 4,
      name: "Home Renovations",
      description: "This is the bundle information",
      fotos: aboutfotografia,
    },
    {
      id: 3,
      name: "Painting",
      description: "This is the bundle information",
      fotos: colorpanels,
    },
    {
      id: 2,
      name: "Offices",
      description: "This is the bundle information",
      fotos: secondoBackground,
    },
    {
      id: 1,
      name: "Community Renovations",
      description: "This is the bundle information",
      fotos: planos,
    },
  ]);
  return (
    <main>
      <section className="section_about">
        <div>
          <h2 className="about_title"> CLEANING & RENOVATION SERVICES</h2>
          <div className="about_details">
            We are a family owned business. Our goal is to leave your home or
            office spotless to begin your daily routine without a worry. Let us
            worry about your home while you continue your daily routine.
          </div>
        </div>
        {/* WORDING */}
        <img className="about_fotografia" src={aboutfotografia} alt="office" />
      </section>
      <Schedule />
      <Bundle listBundles={bundles} key={setBundles} />
      <section className="section_footer">
        <a className=" " href="/">
          &copy;{new Date().getFullYear()} Cribas Development
        </a>
        <br />
        All Rights Reserved
      </section>
    </main>
  );
};

export default Home;
