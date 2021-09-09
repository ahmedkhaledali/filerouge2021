const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const contactShema = new Schema({
  mail: { type: String, required: true },
  commentaire: { type: String, required: true },

});

module.exports = contacts = mongosse.model("contats", contactShema);
