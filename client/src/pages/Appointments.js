import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ScheduledAppointments } from "../components";
import AppointmentSignup from "../components/AppointmentSignup";

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
    <div>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <AppointmentSignup />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ScheduledAppointments
              appointments={appointments}
              title="Some Feed for Appointment(s)..."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
