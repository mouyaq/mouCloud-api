const express = require('express');
const router = express.Router();

const datastoreController = require('../controllers/datastore/datastore.controller');

router.get('/', datastoreController.list);
router.get('/:id', datastoreController.details);

module.exports = router;