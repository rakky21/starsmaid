import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";

const { navigator_backgroundF } = require("../../assets/images");

function AppointmentSignup() {
  const [questionesState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    fecha: "",
  });
  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

  const handleChange = (event) => {
    const { name, value, email, phone, fecha } = event.target;

    setFormState({
      ...questionesState,
      [name]: value,
      [email]: value,
      [phone]: value,
      [fecha]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addAppointment({
        variables: { ...questionesState },
      });
    } catch (e) {
      console.error(e);
    }
  };

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
      <div className="section_form" id="contact">
        <div className="form_heading">
          <p>FILL OUT FORM TO SCHEDULE AN APPOINTMENT</p>
        </div>
        <form className="contact_form" onSubmit={handleFormSubmit}>
          <label for="name">Enter name:</label>
          <input
            required
            value={questionesState.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            name="name"
            class="form-input"
          />
          <label for="email">Email address:</label>
          <input
            required
            value={questionesState.email}
            onChange={handleChange}
            type="text"
            placeholder="Email Address"
            name="email"
            class="form-input"
          />
          <label for="phone"> Phone Number:</label>
          <input
            required
            value={questionesState.phone}
            onChange={handleChange}
            type="number"
            placeholder="Phone Number"
            name="phone"
            class="form-input"
          />
          <label for="date_appt"> Date:</label>
          <input
            required
            value={questionesState.fecha}
            type="date"
            placeholder="Appointment Date"
            name="fecha"
            class="form-input"
            onChange={handleChange}
            // onChange={(e) => setFecha(e.target.value)}
          />
          <label> Select a Bundle</label>
          <Dropdown>
            <Dropdown.Toggle className="menu_dropdown">Bundles</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Home Renovations</Dropdown.Item>
              <Dropdown.Item>Drywall & Painting</Dropdown.Item>
              <Dropdown.Item>Office Cleaning</Dropdown.Item>
              <Dropdown.Item>Community Renovation</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p>
            <label for="checkbox">
              <small>Toggle to schedule estimate and continue as a guest</small>
            </label>
            <input type="checkbox" name="checkpoint1" id="checkbox" />
          </p>
          <button className="btn" type="submit">
            Book It
          </button>
        </form>
      </div>
    </section>
  );
}

export default AppointmentSignup;
