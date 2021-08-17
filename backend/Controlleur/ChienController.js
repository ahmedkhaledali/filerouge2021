const chien =require('../Models/ChienModel')
module.exports={
postchien: async (req, res) => {
        const nom = req.body.nom;
        const model = req.body.model;
        const taille = req.body.taille;
        const critére = req.body.critére;
        const age = req.body.age;
        const vaccin  =req.body.vaccin ;
        const date =req.body.date;
    const image =req.body.image;
        try {
          chiens = new chien({
            nom,
            model,
            taille,
            critére,
            age,
            vaccin,
            date,
            image
          });
          await chiens.save();
          res.json(chiens);
        } catch (error) {
          console.error(error.message);
        }
      },
      getchien: async (req, res) => {
        try {
          const chiens = await chien.find();
          res.json(chiens);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppchien: async (req, res) => {
        try {
          const chiens = await chien.findByIdAndDelete(req.params.id);
          res.json(chiens);
        } catch (error) {
          console.error(error.message);
        }
      },
      putchien: async (req, res) => {
        try {
          const chiens = await chien.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(chiens);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    


