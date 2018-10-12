var express = require('express');
var router = express.Router();
const dataCtrl=require('../controllers/news.controllers');


/* GET users listing. */
router.post('/data',dataCtrl.create);
router.get('/data/:id',dataCtrl.getData);
router.delete('/data/:id',dataCtrl.remove);
router.put('/data/:id',dataCtrl.update);
router.post('/list',dataCtrl.list);
router.post('/data/removes',dataCtrl.removes);



module.exports = router;
