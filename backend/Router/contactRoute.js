const expres = require("express");
const router = expres.Router();
const contact = require("../Controlleur/contactConroller");
router.post("/addcontact",contact.postcontact)
router.get("/getcontact",contact.getcontact)
router.put("/updatecontact/:id",contact.putcontact)
router.delete("/suppcontact/:id",contact.suppcontact)
module.exports = router;