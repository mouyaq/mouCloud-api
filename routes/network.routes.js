const express = require('express');
const router = express.Router();

const networkController = require('../controllers/network/network.controller');

router.get('/', networkController.list);

module.exports = router;