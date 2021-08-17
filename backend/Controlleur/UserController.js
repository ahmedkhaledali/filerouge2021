const user1 =require('../Models/UserModel')
module.exports={
postuser: async (req, res) => {
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email = req.body.email;
        const adress = req.body.adress;
        const motpass = req.body.motpass;
    
        try {
          users = new user1({
            nom,
            prenom,
            email,
            adress,
            motpass,
            image
          });
          await users.save();
          res.json(users);
        } catch (error) {
          console.error(error.message);
        }
      },
      getuser: async (req, res) => {
        try {
          const user = await user1.find();
          res.json(user);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppuser: async (req, res) => {
        try {
          const user = await user1.findByIdAndDelete(req.params.id);
          res.json(user);
        } catch (error) {
          console.error(error.message);
        }
      },
      putuser: async (req, res) => {
        try {
          const user = await user1.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(user);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    


