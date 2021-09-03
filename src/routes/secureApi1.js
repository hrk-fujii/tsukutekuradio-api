var express = require('express');
var middleware = require('./middlewares/api1');
var sendError = require('../utils/sendError');

var createController = require('../controllers/secureApi1/create')

var router = express.Router();


/* POST MIDDLE */
router.use(middleware.auth);

/* POST API */
router.post('/create', createController);

router.use((err, req, res, next) => {
  sendError(res, err);
})

module.exports = router;
