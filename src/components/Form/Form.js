import React from "react";

function Form() {
  return (
    <div className="section_form">
      <div className="form_heading">
        <h2> Request An Estimate</h2>
        <p> Submit a request to receive a </p>
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
        <p>
          <label for="checkbox">Toggle checkbox to contiue as a guest</label>
          <input type="checkbox" name="checkpoint1" id="checkbox" />
        </p>
        <button className="btn" type="submit">
          Book It
        </button>
        <p>Already have an account?</p>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Form;
