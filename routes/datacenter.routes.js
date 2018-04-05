const express = require('express');
const router = express.Router();

const datacenterController = require('../controllers/datacenter/datacenter.controller');

router.get('/', datacenterController.list);
router.post('/', datacenterController.create);
router.get('/:id', datacenterController.details);

module.exports = router;