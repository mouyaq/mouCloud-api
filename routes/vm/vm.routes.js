const express = require('express');
const router = express.Router();

const vmController = require('../../controllers/vm/vm.controller');
const vmPowerController = require('../../controllers/vm/vm.power.controller');

router.get('/', vmController.list);
router.get('/:id/power', vmPowerController.details);
router.get('/:id', vmController.details);

module.exports = router;