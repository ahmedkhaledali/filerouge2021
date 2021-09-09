const expres = require("express");
const router = expres.Router();
const chien = require("../Controlleur/ChienController");
router.post("/addchien",chien.postchien)
router.get("/getchien",chien.getchien)
router.put("/update/:id",chien.putchien)
router.delete("/suppchien/:id",chien.suppchien)
module.exports = router;