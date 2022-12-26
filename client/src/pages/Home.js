import React from "react";
import AppointmentList from "../components/AppointmentList";
import AppointmentForm from "../components/AppointmentForm/";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_APPOINTMENTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_APPOINTMENTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const appointments = data?.appointments || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <AppoitnmentForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AppointmentList
              appointments={appointments}
              title="Some Feed for Appointment(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
