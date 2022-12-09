import React from "react";

import aboutDisplay from "../../utils/images/aboutfotografia.jpg";

const About = () => {
  return (
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
      <img className="about_fotografia" src={aboutDisplay} alt="office" />
    </section>
  );
};

export default About;
