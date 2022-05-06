const { Category } = require("../models");

const getAllCategories = async (req, res) => {
  try {
    const getCategories = Category.findAll();
    res.send(getCategories);
  } catch (error) {
    throw error;
  }
};

const getOneCategory = async (req, res) => {
  try {
    const getOneCategory = await Category.findByPk(req.params.category_id);
    res.send(getOneCategory);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
};
