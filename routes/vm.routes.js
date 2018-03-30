const express = require('express');
const router = express.Router();

const vmController = require('../controllers/vm.controller');

router.get('/', vmController.list);

module.exports = router;