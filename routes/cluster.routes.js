const express = require('express');
const router = express.Router();

const clusterController = require('../controllers/cluster/cluster.controller');

router.get('/', clusterController.list);
router.get('/:id', clusterController.details);

module.exports = router;