const coach =require('../Models/coachModel')
module.exports={
postcoach: async (req, res) => {
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const mail = req.body.mail;
        const cin = req.body.cin;
        const age = req.body.age;
        const experience  =req.body.experience ;
        const image  =req.body.image ;
     
        try {
          coachs = new coach({
            nom,
            prenom,
            mail,
            cin,
            age,
            experience,
            image
          });
          await coachs.save();
          res.json(coachs);
        } catch (error) {
          console.error(error.message);
        }
      },
      getcoach: async (req, res) => {
        try {
          const coachs = await coach.find();
          res.json(coachs);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppcoach: async (req, res) => {
        try {
          const coachs = await coach.findByIdAndDelete(req.params.id);
          res.json(coachs);
        } catch (error) {
          console.error(error.message);
        }
      },
      putcoach: async (req, res) => {
        try {
          const coachs = await coach.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(coachs);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    


