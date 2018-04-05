const express = require('express');
const router = express.Router();

const folderController = require('../controllers/folder/folder.controller');

router.get('/', folderController.list);

module.exports = router;