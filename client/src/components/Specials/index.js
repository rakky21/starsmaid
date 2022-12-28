import React, { useState } from "react";
import Bundle from "../Bundle";

const {
  aboutfotografia,
  colorpanels,
  formbackground,
  navigator_backgroundF,
  planos,
} = require("../../assets/images/");

const Specials = () => {
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
      fotos: formbackground,
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
      <div className="background_navspecials">
        <img src={navigator_backgroundF} alt="Specials display" />
        <p className="para_specials">
          SCHEDULE AN ESTIMATE OR REFER A FRIEND AND RECEIVE A $50.00 OFF YOUR
          NEXT CLEANING OR RENOVATION SERVICE
        </p>
      </div>
      <div className="list_bundle">
        <Bundle listBundles={bundles} key={setBundles} />
      </div>
    </div>
  );
};

export default Specials;
