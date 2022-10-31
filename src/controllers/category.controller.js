const { Category } = require('../models/category.model');
async function list(req, res, next) {
  try {
    res.json(await Category.findAll());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
}

module.exports = {
  list
}