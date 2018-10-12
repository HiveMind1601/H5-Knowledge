var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/comment.controller');
/* GET users listing. */
router.post('/data', dataCtrl.create);
router.delete('/data/:id', dataCtrl.remove);
router.post('/data/removes', dataCtrl.removes);
router.post('/list', dataCtrl.list);
router.put('/data/:id', dataCtrl.update);
router.post('/data/updates', dataCtrl.updates);
router.post('/data/unupdates', dataCtrl.unupdates);
module.exports = router;