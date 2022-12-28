const router = require("express").Router();
const {
  getAllAppointment,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../../controllers/appointment-controller");

// Set up GET all and POST at /api/appointment
router.route("/").get(getAllAppointment).post(createAppointment);

// Set up GET one, PUT, and DELETE at /api/appointment/:id
router
  .route("/:id")
  .get(getAppointmentById)
  .put(updateAppointment)
  .delete(deleteAppointment);

module.exports = router;
