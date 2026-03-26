import { Outlet } from "react-router-dom";
import { Layout, PackageDeals } from "../components/index.js";

const Home = ({ children }) => {
  return (
    <Layout>
      < PackageDeals />
      <Outlet />
    </Layout>
  );
};

export default Home;