const foyer =require('../Models/foyerModel')
module.exports={
postfoyer: async (req, res) => {
        const nom = req.body.nom;
        const model = req.body.model;
        const taille = req.body.taille;
        const critére = req.body.critére;
        const age = req.body.age;
        const vaccin  =req.body.vaccin ;
        const date =req.body.date;
    const image =req.body.image;
    const datepre =req.body.datepre;
    const datefin =req.body.datefin;
        try {
          foyers = new foyer({
            nom,
            model,
            taille,
            critére,
            age,
            vaccin,
            date,
            image,
            datepre,
            datefin
          });
          await foyers.save();
          res.json(foyers);
        } catch (error) {
          console.error(error.message);
        }
      },
      getfoyer: async (req, res) => {
        try {
          const foyers = await foyer.find();
          res.json(foyers);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppfoyer: async (req, res) => {
        try {
          const foyers = await foyer.findByIdAndDelete(req.params.id);
          res.json(races);
        } catch (error) {
          console.error(error.message);
        }
      },
      putfoyer: async (req, res) => {
        try {
          const foyers = await foyer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(foyers);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    


