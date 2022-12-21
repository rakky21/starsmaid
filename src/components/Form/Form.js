import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Form() {
  return (
    <div className="section_form">
      <div className="form_heading">
        <p>Fill out the form to schedule an appoitnment </p>
      </div>
      <form className="contact_form">
        <label for="name">Enter name:</label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          id="name"
          class="form-input"
        />
        <label for="email">Email address:</label>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          id="email"
          class="form-input"
        />
        <label for="phone"> Phone Number:</label>
        <input
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
            <Dropdown.Item>House Renovation</Dropdown.Item>
            <Dropdown.Item>Building Painting</Dropdown.Item>
            <Dropdown.Item>Office Cleaning</Dropdown.Item>
            <Dropdown.Item>Community Renovation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <p>
          <label for="checkbox">
            Toggle to schedule estimate and continue as a guest
          </label>
          <input type="checkbox" name="checkpoint1" id="checkbox" />
        </p>
        <p>
          <label for="checkbox">
            Toggle to recieve e-mails with specials and discounts
          </label>
          <input type="checkbox" name="checkpoint1" id="checkbox" />
        </p>
        <button className="btn" type="submit">
          Book It
        </button>
        {/* <p>Already have an account?</p>
        <button className="btn">Login</button> */}
      </form>
    </div>
  );
}

export default Form;
