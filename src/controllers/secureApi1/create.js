var Article = require('../../models').Article;
var sendError = require('../../utils/sendError');

// create new article
module.exports = (req, res) => {
    const data = req.body;

    // fix parsed object to date
    try {
        data.released_at = new Date(data.released_at.toString());
    } catch (err) {
        if (process.env.NODE_ENV === 'development') {
            return sendError(res, err.message);
        } else {
            return sendError(res, 'create faild.');
        }
    }

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