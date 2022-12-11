import React, { useState } from "react";

import NavBackground from "../../utils/images/navigator_backgroundF.jpg";
import Bundle from "../Bundle/Bundle";


const Specials = () => {
  const [bundles, setBundles] = useState([
    {
      id: 4,
      name: "Nombre2",
      description: "description2",
    },
    {
      id: 3,
      name: "Nombre2",
      description: "description2",
    },
    {
      id: 2,
      name: "House Cleaning",
      description: "description2",
    },
    {
      id: 1,
      name: "Community Mangement Renovations",
      description: "descriptions",
    },
  ]);
  return (
    <div>
      <div className="background_navspecials">
        <img src={NavBackground} alt="Navbackground" />
        <p className="para_specials">
          SCHEDULE AN ESTIMATE OR REFER A FRIEND AND RECEIVE A $50.00 OFF YOUR
          NEXT CLEANING OR RENOVATION SERVICE
        </p>
      </div>
      <Bundle listBundles={bundles} key={setBundles} />
    </div>
  );
};

export default Specials;
