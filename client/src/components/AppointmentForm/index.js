import React, { useState, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";
import { QUERY_APPOINTMENTS, QUERY_ME } from "../../utils/queries";

import auth from "../../utils/auth";

function AppointmentForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [fecha, setFecha] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    fecha: "",
  });
  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

  const handleChange = (event) => {
    const { name, value, email, phone, fecha } = event.target;

    setFormState({
      ...formState,
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
        variables: { ...formState },
      });

      auth.login(data.addAppointment.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="section_form" id="contact">
      <div className="form_heading">
        <p>FILL OUT FORM TO SCHEDULE AN APPOINTMENT</p>
      </div>
      <form className="contact_form" onSubmit={handleFormSubmit}>
        <label for="name">Enter name:</label>
        <input
          required
          value={formState.name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          name="name"
          class="form-input"
        />
        <label for="email">Email address:</label>
        <input
          required
          value={formState.email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Address"
          name="email"
          class="form-input"
        />
        <label for="phone"> Phone Number:</label>
        <input
          required
          value={formState.phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Phone Number"
          name="phone"
          class="form-input"
        />
        <label for="date_appt"> Date:</label>
        <input
          required
          value={formState.fecha}
          type="date"
          placeholder="Appointment Date"
          name="fecha"
          class="form-input"
          onChange={(e) => setFecha(e.target.value)}
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
  );
}

export default AppointmentForm;
