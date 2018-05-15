const express = require('express');
const router = express.Router();

const contentLibraryController = require('../../controllers/content/library.controller');

router.get('/', contentLibraryController.list);

module.exports = router;