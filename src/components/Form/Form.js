import React, { useState, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import emailjs from "emailjs-com";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_i4be4im",
      "template_9nsiyeb",
      form.current,
      "ZzbtA-4C5mnas6mko"
    );
  };

  return (
    <div className="section_form" id="contact">
      <div className="form_heading">
        <p>FILL OUT FORM TO SCHEDULE AN APPOINTMENT</p>
      </div>
      <form className="contact_form" ref={form} onSubmit={sendEmail}>
        <label for="name">Enter name:</label>
        <input
          required
          value={name}
          onChange={(e) => (setName = e.target.value)}
          type="text"
          placeholder="Your Name"
          name="name"
          class="form-input"
        />
        <label for="email">Email address:</label>
        <input
          required
          value={email}
          onChange={(e) => (setEmail = e.target.value)}
          type="text"
          placeholder="Email Address"
          name="email"
          class="form-input"
        />
        <label for="phone"> Phone Number:</label>
        <input
          required
          value={phone}
          onChange={(e) => (setPhone = e.target.value)}
          type="text"
          placeholder="Phone Number"
          name="phone"
          class="form-input"
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

export default Form;
