const expres = require("express");
const router = expres.Router();
const user = require("../Controlleur/UserController");
router.post("/adduser",user.postuser)
router.get("/getuser",user.getuser)
router.put("/:id/update",user.putuser)
router.delete("/:id",user.suppuser)
module.exports = router;