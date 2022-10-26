const categoryRepository = require('../repositories/categoryRepository');

async function list(req, res, next) {
  try {
    res.json(await categoryRepository.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
}

module.exports = {
  list
}