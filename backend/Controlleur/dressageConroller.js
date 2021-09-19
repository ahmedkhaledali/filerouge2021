const dressage =require('../Models/dressageModel')
module.exports={
postdressage: async (req, res) => {
        const id_client =req.body.id_client;
    const date_dressage =req.body.date_dressage;
    const resultat =req.body.resultat;
        try {
          dressages = new dressage({
            id_client,
            date_dressage,
            resultat
          });
          await dressages.save();
          res.json(dressages);
        } catch (error) {
          console.error(error.message);
        }
      },
      getdressage: async (req, res) => {
        try {
          const dressages = await dressage.find();
          res.json(dressages);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppdressage: async (req, res) => {
        try {
          const dressages = await dressage.findByIdAndDelete(req.params.id);
          res.json(dressages);
        } catch (error) {
          console.error(error.message);
        }
      },
      putdressage: async (req, res) => {
        try {
          const dressages = await dressage.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(dressages);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    


