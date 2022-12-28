const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const appointmentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    appointmentDate: {
      type: Date,
      required: "You must select a time and day",
    },
    appointmentText: {
      type: String,
      required: "Leave a comment!",
      minlength: 2,
      maxlength: 280,
    },
    bundles: [],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
