import React from "react";
import { Link } from "react-router-dom";

const ApointmentList = ({ appointments, title }) => {
  if (!appointments.length) {
    return <h3>No appointments scheduled</h3>;
  }
  console.log(appointments);

  return (
    <div>
      <h3>{title}</h3>
      {appointments &&
        appointments.map((appointment) => (
          <div key={appointment._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${appointment.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {appointment.username}
              </Link>{" "}
              appointment on {appointment.scheduledOn}
            </p>
            <div className="card-body">
              <Link to={`/appointment/${appointment._id}`}>
                <p>{appointment.thoughtText}</p>
                <p className="mb-0">
                  Reactions: {appointment.reactionCount} || Click to{" "}
                  {appointment.reactionCount ? "see" : "start"} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ApointmentList;
