const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const raceShema = new Schema({
   id_client: { type: String, required: true },
  couplerace:{type: String, required: true },
  date_race :{type: String, required: true },
  resultat:{
    type:String,
    enum:['confirme','non-confirme'],
    default: 'non-confirme' 
}
  
});
 
module.exports = races = mongosse.model("races", raceShema);
