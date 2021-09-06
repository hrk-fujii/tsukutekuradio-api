var express = require('express');
var middleware = require('./middlewares/api1');
var sendError = require('../utils/sendError');

var createController = require('../controllers/secureApi1/create');
var deleteController = require('../controllers/secureApi1/delete');
var editController = require('../controllers/secureApi1/edit');

var router = express.Router();


/* POST MIDDLE */
// router.use(middleware.auth);

/* POST API */
router.post('/create', createController);
router.post('/delete', deleteController);
router.post('/edit', editController);

router.use((err, req, res, next) => {
  sendError(res, err);
})

module.exports = router;
