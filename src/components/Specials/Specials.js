import React, { useState } from "react";

import NavBackground from "../../utils/images/navigator_backgroundF.jpg";
import Bundle from "../Bundle/Bundle";

const Specials = () => {

    const [bundles, setBundles] = useState ([
        {
            id:2,
            name: 'Nombre2',
            description: 'description2'
        },
        {
            id:1,
            name: 'Nombre',
            description: 'descriptions'
        },
    ])
  return (
    <div>
      <div className="background_navspecials">
        <img src={NavBackground} alt="Navbackground" />
        <p>
          SCHEDULE AN ESTIMATE OR REFER A FRIEND AND GET $25.00 OFF YOUR NEXT
          CLEANING SERVICE
        </p>
      </div>
      <Bundle listBundles={bundles} key={setBundles} />
   </div>

  );
};

export default Specials;
