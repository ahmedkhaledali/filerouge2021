const expres = require("express");
const router = expres.Router();
const dressage = require("../Controlleur/dressageConroller");
router.post("/adddressage",dressage.postdressage)
router.get("/getdressage",dressage.getdressage)
router.put("/updatedressage/:id",dressage.putdressage)
router.delete("/suppdressage/:id",dressage.suppdressage)
module.exports = router;