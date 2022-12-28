import React, { useState } from "react";

import "react-calendar/dist/Calendar.css";

import AppointmentForm from "../AppointmentForm/index";

const Schedule = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="section_schedule">
      <h2> SCHEDULE AN ESTIMATE</h2>
      <div className="section_container">
        <AppointmentForm />
      </div>
    </section>
  );
};

export default Schedule;
