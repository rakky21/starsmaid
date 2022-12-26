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
    appointmentText: {
      type: String,
      required: "You must leave a comment!",
      minlength: 2,
      maxlength: 280,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
