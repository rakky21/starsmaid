import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import AppointmentForm from "../AppointmentForm/index";

const { navigator_backgroundF } = require("../../assets/images/");
const Schedule = () => {
  return (
    <section className="section_schedule">
      <div className="section_container">
        <h2 className="section_header"> SCHEDULE AN ESTIMATE</h2>
        <div className="background_navspecials">
          <img src={navigator_backgroundF} alt="Specials display" />
          <p className="para_specials">
            SCHEDULE A FREE ESTIMATE AND RECEIVE A $50.00 OFF YOUR FIRST
            CLEANING OR RENOVATION SERVICE
          </p>
        </div>
      </div>
      <div className="section_appointmentForm">
        <AppointmentForm />
      </div>
    </section>
  );
};

export default Schedule;
