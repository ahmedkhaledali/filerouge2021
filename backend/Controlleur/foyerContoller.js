const foyer =require('../Models/foyerModel')
module.exports={
postfoyer: async (req, res) => {
        const id_client= req.body.id_client;
    const datepre =req.body.datepre;
    const datefin =req.body.datefin;
    const resultat =req.body.resultat;
        try {
          foyers = new foyer({
            id_client,
            datepre,
            datefin,
            resultat
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
          res.json(foyers);
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
    


