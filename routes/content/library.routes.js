const express = require('express');
const router = express.Router();

const contentLibraryController = require('../../controllers/content/library.controller');

router.get('/', contentLibraryController.list);
router.get('/:id', contentLibraryController.details);
// returns all items from content library=id
router.get('/:id/items/', contentLibraryController.items);
router.get('/item/:id', contentLibraryController.itemDetails);
router.post('/deployItem/:id', contentLibraryController.deployItem);

// router.post('/', vmController.create);
// router.get('/:id/power', vmPowerController.details);
// router.post('/:id/power/reset', vmPowerController.reset);
// router.post('/:id/power/start', vmPowerController.start);
// router.post('/:id/power/stop', vmPowerController.stop);
// router.get('/:id', vmController.details);
// router.delete('/:id', vmController.delete);
// router.get('/:id/console', vmController.console);
// router.get('/:id/consolePython', vmController.consolePython);

module.exports = router;