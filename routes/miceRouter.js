const Router = require("express").Router();
const controllers = require("../controllers/MiceController");

Router.post("/:categoryId", controllers.CreateMouse);
module.exports = Router;
