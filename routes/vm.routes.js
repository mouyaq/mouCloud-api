const express = require('express');
const router = express.Router();

const vmController = require('../controllers/vm/vm.controller');
const vmPowerController = require('../controllers/vm/vm.power.controller');

router.get('/', vmController.list);
router.post('/', vmController.create);
router.get('/:id/power', vmPowerController.details);
router.post('/:id/power/reset', vmPowerController.reset);
router.post('/:id/power/start', vmPowerController.start);
router.post('/:id/power/stop', vmPowerController.stop);
router.get('/:id', vmController.details);
router.delete('/:id', vmController.delete);
router.get('/:id/console', vmController.console);
router.get('/:id/consolePython', vmController.consolePython);

module.exports = router;