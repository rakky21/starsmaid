import React, { useState } from "react";
import Bundle from "../components/Bundle";
import AppointmentSignup from "../components/AppointmentSignup";

const {
  aboutfotografia,
  colorpanels,
  secondoBackground,
  planos,
} = require("../assets/images/index.js");

const Home = () => {
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
    <div>
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
      <AppointmentSignup />
      <Bundle listBundles={bundles} key={setBundles} />

    </div>
  );
};

export default Home;
