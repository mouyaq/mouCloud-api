const express = require('express');
const router = express.Router();

const contentLibraryController = require('../../controllers/content/library.controller');

router.get('/', contentLibraryController.list);
router.get('/:id', contentLibraryController.details);
// returns all items from content library=id
router.get('/:id/items/', contentLibraryController.items);
router.get('/item/:id', contentLibraryController.itemDetails);
router.post('/deployItem/:id', contentLibraryController.deployItem);

module.exports = router;