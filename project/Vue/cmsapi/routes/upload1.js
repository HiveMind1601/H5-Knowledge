var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/upload.controller');
/* GET users listing. */
router.post('/uploadFile',dataCtrl.uploadFile);
router.get('/data/:id', dataCtrl.getData);
router.delete('/data/:id', dataCtrl.remove);
router.post('/data/removes', dataCtrl.removes);
router.put('/data/:id', dataCtrl.update);
router.post('/list', dataCtrl.list);

module.exports = router;