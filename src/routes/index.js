const express = require('express');
const category = require('./category.route');
const router = express.Router();

router.use(category);

module.exports = router;