const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const dressageShema = new Schema({
  id_client: { type: String, required: true },
  date_dressage :{type: String, required: true },
  resultat:{
    type:String,
    enum:['confirme','non-confirme'],
    default: 'non-confirme'
}
});

module.exports = dressages = mongosse.model("dressages", dressageShema);
