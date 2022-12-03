import React from "react";

const Footer = () => {
  return (
    <section className="section_footer">
      <a className=" " href="/">
        &copy;{new Date().getFullYear()} Cribas Development
      </a>
      <br />
      All Rights Reserved
    </section>
  );
};

export default Footer;
