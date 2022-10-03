const express = require("express");
const route = express.Router();
const controller = require('../controller/loanController')
const auth = require('../middleware/auth.js')

route.post("/applyLoan", auth, controller.applyNewLoan);
route.post("/acceptLoan/:loanID", auth, controller.acceptLoan);
route.post("/modify/:loanID", auth, controller.modifyLoan);

module.exports = route;