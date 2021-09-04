var Article = require('../../models').Article;
var sendError = require('../../utils/sendError');

// create new article
module.exports = (req, res) => {
    const data = req.body;
    Article.create(data).then((val) => {
        res.json({'success': true});
    }, (err) => {
        if (process.env.NODE_ENV === 'development') {
            sendError(res, err);
        } else {
            sendError(res, 'create faild.');
        }
    });
}