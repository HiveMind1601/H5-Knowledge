var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/product.controller');
/* GET users listing. */
router.post('/data', dataCtrl.create);
router.get('/data/:id', dataCtrl.getData);
router.delete('/data/:id', dataCtrl.remove);
router.post('/data/removes', dataCtrl.removes);
router.put('/data/:id', dataCtrl.update);
router.post('/list', dataCtrl.list);

module.exports = router;
