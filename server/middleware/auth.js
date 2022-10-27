const jwt = require("jsonwebtoken");
var {User}  = require("../models/userModels");
const cookieParser = require("cookie-parser");

const config = process.env;

const verifyToken = async (req, res, next) => {
  // Token can be stored in headers and in cookie both
  // For postman both and for browser cookie we use
  // console.log(req.cookies)
  const token = req.headers.jwtoken || req.cookies.jwtoken;

  if (!token) {
    return res.status(401).send("Pleas login to access this route!!");
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
  

    const user = await User.findById(decoded.id);
    // console.log(user)
    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }
    req.user = user;
    // console.log(req.user._id);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;