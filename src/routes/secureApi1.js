var express = require('express');
var middleware = require('./middlewares/api1');
var sendError = require('../utils/sendError');

var router = express.Router();


/* POST MIDDLE */
router.use(middleware.auth);

/* POST API */
router.get('/create', function(req, res, next) {
  res.render('index', { title: 'create' });
});

router.use((err, req, res, next) => {
  sendError(res, err);
})

module.exports = router;
