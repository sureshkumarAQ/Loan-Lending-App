const { Loan } = require("../models/loanModels");
const User  = require("../models/userModels");
const { findOne } = require("../models/userModels");

exports.applyNewLoan = async (req, res) => {
    try {
      const userID = req.user._id;
      if (!userID) {
        res.status(401).send("Please Login to apply for a loan request");
      }
  
      const user = await User.findOne(userID);
  
      if (!user) {
        res.status(400).send("User Not found");
      }
      const loan = await new Loan({
        userWhoApplyForLoan: userID,
        loanAmount: req.body.loanAmount,
        tenure: req.body.tenure,
        interestRate: req.body.interestRate,
      });
      // console.log(loan);
      await loan.save(loan).then((data) => {
        res.status(201).send(data);
      });
    } catch (error) {
      res.status(401).send(error.message);
    }
};

exports.acceptLoan = async (req, res) => {
    try {
      const userID = req.user._id;
      const loanID = req.params.loanID;
  
      const loan = await Loan.findById(loanID);
      // console.log(loan);
      if (!loan) {
        res.status(201).send("There is no loan request with this ID");
      }

      const loanUserID = loan.user;
      
      if(userID===loanUserID)
      {
        res.status(201).send("You can not accept your own loan request");
      }
  
      //Calculating score based on age and ctc
    
      await Loan.findOneAndUpdate(
        {
          _id: loanID,
        },
        {
          acceptanace: true,
          usersWhoAccept: userID,
        }
      ).exec();
  

      const UpdatedLoan = await Loan.findById(loanID)
      .populate("usersWhoAccept")
      .select('-password -__v ')
      res.status(200).send(UpdatedLoan);
      // console.log(UpdatedLoan)
    } catch (err) {
      res.status(400).send(err);
    }
  };
  