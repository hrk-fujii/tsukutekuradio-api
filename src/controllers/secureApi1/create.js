var Article = require('../../models').Article;
var sendError = require('../../utils/sendError');

// create new article
module.exports = (req, res) => {
    const data = req.body;
    Article.create(data).then((val) => {
        res.json({'success': true});
    }, (err) => {
        sendError(res, err)
    });
}