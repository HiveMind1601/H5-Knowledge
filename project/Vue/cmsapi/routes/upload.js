var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/upload.controller');

router.post('/uploadFile', dataCtrl.uploadFile);
router.post('/list',dataCtrl.list);
router.delete('/data/:id',dataCtrl.remove);

module.exports = router;
