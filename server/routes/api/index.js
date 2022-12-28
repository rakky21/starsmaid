const route = require("express").Router();

const router = require("./appointment-routes");
const appointmentRoutes = require("./appointment-routes");

router.use("./appointments", appointmentRoutes);

module.exports = router;
