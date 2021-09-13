const expres = require("express");
const router = expres.Router();
const foyer = require("../Controlleur/foyerContoller");
router.post("/addfoyer",foyer.postfoyer)
router.get("/getfoyer",foyer.getfoyer)
router.put("/updatefoyer/:id",foyer.putfoyer)
router.delete("/suppfoyer/:id",foyer.suppfoyer)
module.exports = router;