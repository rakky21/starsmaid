import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Form() {
  return (
    <div className="section_form">
      <div className="form_heading">
        <p>FILL OUT FORM TO SCHEDULE AN APPOINTMENT</p>
      </div>
      <form className="contact_form">
        <label for="name">Enter name:</label>
        <input
          required
          type="text"
          placeholder="Your Name"
          name="name"
          id="name"
          class="form-input"
        />
        <label for="email">Email address:</label>
        <input
          required
          type="text"
          placeholder="Email Address"
          name="email"
          id="email"
          class="form-input"
        />
        <label for="phone"> Phone Number:</label>
        <input
          required
          type="text"
          placeholder="Phone Number"
          name="phone"
          id="phone"
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
