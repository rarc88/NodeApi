var express = require('express');
var router = express.Router();

const user = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ status: 'OK', message: 'User' });
});

router.post('/create', user.create);

module.exports = router;
