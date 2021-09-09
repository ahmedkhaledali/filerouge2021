const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const coachShema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  mail: { type: String, required: true },
  age: { type: String, required: true },
  cin : { type: String, required: true },
  experience:{type: String, required: true },
  image :{type: String, required: true }
});

module.exports = coachs = mongosse.model("coachs", coachShema);
