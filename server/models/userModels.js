const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String
  },
  ctc: {
    type: Number,
    default:null
  },
  bankname: {
    type: String,
    default:null
  },
  accountnumber: {
    type: Number,
    default:null
  },
  ifsc: {
    type: String,
    default:null
  },
  age: {
    type: Number,
    default:null
  },
  loantaken: {
    type: Number,
    default: 0,
  },
  loangiven:{
    type:Number,
    default:0
  },
  cibilScore: {
    type: Number,
    default: 300,
  },
  maxLoanAmount: {
    type: Number,
    default: 0,
  },
});

// Hash password usign mongoose hook
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  let newPassword = this.password.toString();
  this.password = await bcrypt.hash(newPassword, salt);
  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;