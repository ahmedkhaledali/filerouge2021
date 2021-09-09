const expres = require("express");
const router = expres.Router();
const coach = require("../Controlleur/coachContoller");
router.post("/addcoach",coach.postcoach)
router.get("/getcoach",coach.getcoach)
router.put("/updatecoach/:id",coach.putcoach)
router.delete("/suppcoach/:id",coach.suppcoach)
module.exports = router;