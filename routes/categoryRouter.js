const Router = require("express").Router();
const controllers = require("../controllers/CategoryController");

Router.get("/:category_id", controllers.getOneCategory);
module.exports = Router;
