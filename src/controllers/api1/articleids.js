var Article = require('../../models').Article;
var sendError = require('../../utils/sendError');

// get all article identifier
module.exports = (req, res) => {
    Article.findAll({
        attributes: ['id', 'title', 'released_at']
    }).then((val) =>{
        res.json({'success': true, 'articles': val});
    }, (err) => {
        if (process.env.NODE_ENV === 'development') {
            sendError(err);
        } else{
            sendError('get all article identifiers faild.');
        }
    })
}
