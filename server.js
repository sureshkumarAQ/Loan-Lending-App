const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv")
const route = express.Router();
const cookieParser = require("cookie-parser")

const connectDB = require("./server/database/connection.js");

const app = express();
// app.use(cors());

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// Log request Using Morgan
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// Parse request  to body parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

// Load routers

app.use("/", require("./server/routes/routes.js"));
app.use("/user", require("./server/routes/userRoutes.js"));
app.use("/loan", require("./server/routes/loanRoutes.js"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});