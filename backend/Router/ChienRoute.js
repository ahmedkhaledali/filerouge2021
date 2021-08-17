const expres = require("express");
const router = expres.Router();
const chien = require("../Controlleur/ChienController");
router.post("/addchien",chien.postchien)
router.get("/getchien",chien.getchien)
router.put("/:id/updchien",chien.putchien)
router.delete("/:id",chien.suppchien)
module.exports = router;