const mongoose = require("mongoose");
require('dotenv').config();
// mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/starsmaid", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;