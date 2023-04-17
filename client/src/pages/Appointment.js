import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_APPOINTMENT } from "../utils/queries";

const Appointment = (props) => {
  const { id: appointmentId } = useParams();

  const { loading, data } = useQuery(QUERY_APPOINTMENT, {
    variables: { id: appointmentId },
  });

  const appointment = data?.appointment || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mb-3">
      <p className="card-header">
        <span style={{ fontWeight: 700 }} className="text-light">
          {appointment.username}
        </span>{" "}
        appointment on {appointment.scheduledOn}
      </p>
      <div className="card-body">
        <p>{appointment.appointmentText}</p>
      </div>
    </div>
  );
};

export default Appointment;
