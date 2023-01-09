const { json } = require("express");
const { Appointment } = require("../../models");

const appointmentController = {
  getAllAppointment(req, res) {
    Appointment.find({})
      .then((dbAppointmentData) => res.json(dbAppointmentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getAllAppointmentById({ params }, res) {
    Appointment.findOne({ _id: params.id })
      .then((dbAppointmentData) => {
        if (!dbAppointmentData) {
          res
            .status(404)
            .json({ message: "No appointment was scheduled for this id" });
          return;
        }
        res.json(dbAppointmentData);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  },

  createAppointment({ body }, res) {
    Appointment.create(body)
      .then((dbAppointmentData) => json(dbAppointmentData))
      .catch((err) => res.status(404).json(err));
  },

  updateAppointment({ params, body }, res) {
    Appointment.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbAppointmentData) => {
        if (!dbAppointmentData) {
          res
            .status(404)
            .json({ message: "No appointment found with this ID" });
          return;
        }
        res.json(dbAppointmentData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteAppointment({ params }, res) {
    Appointment.findOneAndDelete({ _id: params.id })
      .then((dbAppointmentData) => {
        if (!dbAppointmentData) {
          res.status(404).json({ message: " No appointment was found" });
          return;
        }
        res.json(dbAppointmentData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = appointmentController;
