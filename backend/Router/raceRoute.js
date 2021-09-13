const expres = require("express");
const router = expres.Router();
const race = require("../Controlleur/RaceController");
router.post("/addrace",race.postrace)
router.get("/getrace",race.getrace)
router.put("/updaterace/:id",race.putrace)
router.delete("/supprace/:id",race.supprace)
module.exports = router;