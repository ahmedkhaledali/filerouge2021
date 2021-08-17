//connect avec mongodb
const mongoose = require("mongoose");
const db_connection = () => {
  mongoose
    .connect(
  "mongodb+srv://center-chien:chien123!@cluster0.jngra.mongodb.net/center?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
    .then(() => {
      console.log("data_base connected");

    })
    .catch(() => {
      console.log("error data base");
    });
};
module.exports = db_connection;
