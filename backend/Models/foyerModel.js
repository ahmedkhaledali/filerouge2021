const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const foyerShema = new Schema({
  id_client: { type: String, required: true },     
  datepre :{type: String, required: true },
  datefin :{type: String, required: true },
  resultat:{
    type:String,
    enum:['confirme','non-confirme'],
    default: 'non-confirme'
}
});

module.exports = foyers = mongosse.model("foyers", foyerShema);
