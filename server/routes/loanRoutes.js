const express = require("express");
const route = express.Router();
const controller = require('../controller/loanController')
const auth = require('../middleware/auth.js')

route.post("/applyLoan", auth, controller.applyNewLoan);
route.post("/acceptLoan/:loanID", auth, controller.acceptLoan);
route.post("/modify/:loanID", auth, controller.modifyLoan);
route.post("/acceptModifiedLoan/:loanID",auth,controller.acceptModifiedLoanRequest);

route.get('/oneloan/:loanID',auth,controller.getOneLoan);

module.exports = route;