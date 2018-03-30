const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/session/session.controller');

router.post('/', sessionController.create);
router.delete('/', sessionController.destroy);

module.exports = router;