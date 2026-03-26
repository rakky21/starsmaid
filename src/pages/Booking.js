import { Outlet } from "react-router-dom";
import { Layout, Scheduler } from "../components/index.js";

const Booking = ({ children }) => {
  return (
    <Layout>
      <Scheduler />
      <Outlet />
    </Layout>
  );
};

export default Booking;
