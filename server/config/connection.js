// const mongoose = require("mongoose");
// require("dotenv").config();
// mongoose.set("strictQuery", false);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://8080", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.set('debug', true);

// module.exports = mongoose.connection;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://27017/", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MONGO CONNECTED!");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running on ${res.url}`);
  });
