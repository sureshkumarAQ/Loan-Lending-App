const express = require("express");
const route = express.Router();
const controller = require('../controller/userController')
const auth = require('../middleware/auth.js')

const {upload} = require('../middleware/upload')

route.post('/signup',controller.signUp)
route.post('/login',controller.logIn)

route.post('/:userID/edit',auth,controller.editProfile)

route.post(
    "/uploadProfilePhoto",
    auth,
    upload.single("profilePhoto"),
    controller.uploadProfilePhoto
  );
  route.post(
    "/uploadAadhar",
    auth,
    upload.single("Aadhar"),
    controller.uploadAdhar
  );
  route.post(
    "/uploadPan",
    auth,
    upload.single("panCard"),
    controller.uploadPan
  );

//GET routes
route.get("/:userID",auth,controller.getUserProfile)
route.get("/",auth,controller.searchUser);

module.exports = route;