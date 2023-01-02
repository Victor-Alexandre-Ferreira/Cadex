const express = require('express');

const router = express.Router();
const cadexController = require('../controllers/cadex');

router.get('/cadex', cadexController.get);

module.exports = router;
