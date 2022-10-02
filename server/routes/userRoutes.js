const express = require("express");
const route = express.Router();
const controller = require('../controller/userController')
const auth = require('../middleware/auth.js')

route.post('/signup',controller.signUp)
route.post('/login', controller.logIn)

route.post('/:userID/edit',auth,controller.editProfile)

//GET routes
route.get("/:userID",auth,controller.getUserProfile)



module.exports = route;