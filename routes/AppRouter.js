const Router = require("express").Router();
const categoryRouter = require("./categoryRouter");
// const inventoryRouter = require("./inventoryRouter");
const miceRouter = require("./miceRouter");
Router.use("/category", categoryRouter);
Router.use("/mice", miceRouter);
// Router.use("/stock", inventoryRouter);
module.exports = Router;
