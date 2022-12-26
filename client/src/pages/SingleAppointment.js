import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_APPOINTMENT } from "../utils/queries";

const SingleAppointment = (props) => {
  const { id: appointmentId } = useParams();

  const { loading, data } = useQuery(QUERY_APPOINTMENT, {
    variables: { id: appointmentId },
  });

  const appointment = data?.appointment || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {appointment.username}
          </span>{" "}
          appointment on {appointment.createdAt}
        </p>
        <div className="card-body">
          <p>{appointment.appointmentText}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
