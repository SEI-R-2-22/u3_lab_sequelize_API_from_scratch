/////////////////Imports////////
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const AppRouter = require("./routes/AppRouter");

//////////////variables////////
const PORT = process.env.PORT || 3001;
const app = express();

////////////////MiddleWare////////////////////
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.static(`${__dirname}/client/build`));
app.use(bodyParser.json());

////////////////////Routes/////////////////////
app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);
/////////////////Express server listen to port //////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
