const race =require('../Models/raceModel')
module.exports={
postrace: async (req, res) => {
        const id_client =req.body.id_client;
    const couplerace =req.body.couplerace;
    const date_race =req.body.date_race;
    const resultat =req.body.resultat;
    
        try {
          races = new race({
            id_client,
            couplerace,
            date_race,
            resultat
          });
          await races.save();
          res.json(races);
        } catch (error) {
          console.error(error.message);
        }
      },
      getrace: async (req, res) => {
        try {
          const races = await race.find();
          res.json(races);
        } catch (error) {
          console.error(error.message);
        }
      },
      supprace: async (req, res) => {
        try {
          const races = await race.findByIdAndDelete(req.params.id);
          res.json(races);
        } catch (error) {
          console.error(error.message);
        }
      },
      putrace: async (req, res) => {
        try {
          const races = await race.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(races);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    


