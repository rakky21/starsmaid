import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ScheduledAppointments, QueryResult } from "../components";

const QUERY_APPOINTMENTS = gql`
  query ScheduledAppointments {
    scheduledAppointments {
      username
      appointmentDate
      createdAt
    }
  }
`;

const Appointments = () => {
  return (
    <main>
      {/* <QueryResult> {appointments} </QueryResult> */}

      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <AppointmentForm />
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

export default Appointments;
