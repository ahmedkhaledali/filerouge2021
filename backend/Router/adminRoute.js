const router = require('express').Router()
 const requireSignin = require('../token/jsontoken')
const admin = require('../Controlleur/adminControlleur')
 router.post('/admin/signin',admin.signIn)
 

module.exports = router