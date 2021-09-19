

const router = require('express').Router()
const  user = require('../Controlleur/UserController')
const {requireSignin} = require('../token/jsontoken')
 


router.get("/getuser",user.getuser)
router.post('/register',user.register)
router.post('/signin',user.signIn)
router.put("/upduser/:id",user.putuser)
router.delete("/suppuser/:id",user.suppuser)
  
module.exports = router 