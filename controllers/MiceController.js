const { Mouse } = require("../models");

const CreateMouse = async (req, res) => {
  try {
    let categoryid = parseInt(req.params.categoryId);
    let MouseBody = {
      categoryid,
      ...req.body,
    };
    const newMouse = await Mouse.create(MouseBody);
    res.send(newMouse);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateMouse,
};
