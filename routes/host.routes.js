const express = require('express');
const router = express.Router();

const hostController = require('../controllers/host/host.controller');

router.get('/', hostController.list);

module.exports = router;