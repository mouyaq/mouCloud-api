const express = require('express');
const router = express.Router();

const vmPowerController = require('../../controllers/vm/vm.power.controller');

router.get('/', vmPowerController.details);

module.exports = router;