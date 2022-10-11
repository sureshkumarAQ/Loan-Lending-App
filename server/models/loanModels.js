const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./userModels");

const LoanSchema = new Schema({
  userWhoApplyForLoan: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  tenure: {
    type: String,
    require: true,
  },
  interestRate: {
    type: Number,
    require: true,
  },
  acceptanace: {
    type: Boolean,
    default: false,
  },
  usersWhoAccept: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const ModifyLoanSchema = new Schema({
  originalLoan:{
    type: Schema.Types.ObjectId,
    ref: "Loan",
  },
  modifier: { 
    type: Schema.Types.ObjectId,
    ref: "user" 
  },
  userWhosLoan: { 
    type: Schema.Types.ObjectId,
    ref: "user" 
  },
  modifiedLoanAmount: {
    type: Number,
  },
  modifiedTenure: {
    type: String,
  },
  modifiedInterestRate: {
    type: Number,
  },
  isModifiedLoanAccepted: {
    type: Boolean,
    default: false,
  },
});

const Loan = mongoose.model("Loan", LoanSchema);
const ModifyLoan = mongoose.model("ModifyLoan", ModifyLoanSchema);
module.exports = { Loan, ModifyLoan };