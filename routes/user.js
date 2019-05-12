var express = require('express');
var router = express.Router();

const user = require('../controllers/user');

router.get('/', function(req, res, next) {
  res.send({ status: 'OK', message: 'Users' });
});

router.post('/create', user.create);
router.get('/list', user.list);

module.exports = router;
