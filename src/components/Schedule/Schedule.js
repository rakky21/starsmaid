import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Form from "../Form/Form";

const Schedule = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="section_schedule">
        <h2> SCHEDULE AN ESTIMATE</h2>
      <div className="section_container">

        <Form />
        <div className="container_schedule">
          <Calendar
            onChange={onChange}
            value={value}
            className="calender_section"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
