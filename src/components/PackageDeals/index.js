import { useState } from "react";
import '../../utils/style.css'
import renovation from "../../assets/photos/renovation.jpg";
import Card from "../Card";

const PackageDeals = () => {
  const [PACKAGES, setPACKAGES] = useState([
    {
      id: 5,
      name: "Wall Repairs",
      description: "This is the service information",
      fotos: renovation,
    },
    {
      id: 4,
      name: "Dry Wall Repairs",
      description: "This is the service information",
      fotos: renovation,
      group: "Renovation",
    },
    {
      id: 3,
      name: "Office Cleaning",
      description: "This is the service information",
      fotos: renovation,
    },
    {
      id: 2,
      name: "House Cleaning",
      description: "This is the service information",
      fotos: renovation,
      group: "Renovation",
    },
    {
      id: 1,
      name: "Renovation",
      description: "This is the service information",
      fotos: renovation,
      group: "Renovation"
    },
  ]);
  return (
    <>
    <section className="intro_section">
      <h2> Welcome to Starmsaids Renovation.</h2>
    </section>
      <section className="package_section">
        <Card
          PACKAGELIST={PACKAGES.filter(
            (PACKAGE) => PACKAGE.group === "Renovation"
          )}
          key={setPACKAGES.id}
        />
      </section>
      <div className="services_section">
        <h2 className="serv_head">
          Want to keep your home clean but have no time?
          Want to k Your Home & Office Clean or Renovate Your New or Current Home
        </h2>
      </div>
    </>
  );
};

export default PackageDeals;
