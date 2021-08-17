const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const chienShema = new Schema({
  nom: { type: String, required: true },
  model: { type: String, required: true },
  taille: { type: String, required: true },
  critére: { type: String, required: true },
  age : { type: String, required: true },
  vaccin :{type: String, required: true },
  date :{type: String, required: true },
  image :{type: String, required: true }
});

module.exports = chiens = mongosse.model("chiens", chienShema);
