const race =require('../Models/raceModel')
module.exports={
postrace: async (req, res) => {
        const nom = req.body.nom;
        const model = req.body.model;
        const taille = req.body.taille;
        const critére = req.body.critére;
        const age = req.body.age;
        const vaccin  =req.body.vaccin ;
        const date =req.body.date;
    const image =req.body.image;
    const couplerace =req.body.couplerace;
        try {
          races = new race({
            nom,
            model,
            taille,
            critére,
            age,
            vaccin,
            date,
            image,
            couplerace
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
    


