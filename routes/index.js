const express = require('express');
const general = require('./general');
const router = express.Router();

router.use(general);

module.exports = router;