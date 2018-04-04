const express = require('express');
const router = express.Router();

const rpController = require('../controllers/resource-pool/resource-pool.controller');

router.get('/', rpController.list);
router.get('/:id', rpController.details);

module.exports = router;