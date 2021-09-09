const contact =require('../Models/contactModal')
module.exports={
postcontact: async (req, res) => {
        const mail = req.body.mail;
        const commentaire = req.body.commentaire;

     
        try {
          contacts = new contact({

            mail,
            commentaire
          });
          await contacts.save();
          res.json(contacts);
        } catch (error) {
          console.error(error.message);
        }
      },
      getcontact: async (req, res) => {
        try {
          const contacts = await contact.find();
          res.json(contacts);
        } catch (error) {
          console.error(error.message);
        }
      },
      suppcontact: async (req, res) => {
        try {
          const contacts = await contact.findByIdAndDelete(req.params.id);
          res.json(contacts);
        } catch (error) {
          console.error(error.message);
        }
      },
      putcontact: async (req, res) => {
        try {
          const contacts = await contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(contacts);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    


