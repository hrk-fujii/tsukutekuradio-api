var express = require('express');
var sendError = require('../utils/sendError');

var articleidsController = require('../controllers/api1/articleids');
var articleController = require('../controllers/api1/article');

var router = express.Router();


/* POST API */
router.get('/articleids', articleidsController);
router.get('/article', articleController);


router.use((err, req, res, next) => {
  sendError(res, err);
})

module.exports = router;
