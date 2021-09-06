var Article = require('../../models').Article;
var sendError = require('../../utils/sendError');

// delete article
module.exports = (req, res) => {
    const id = req.body.id;
    Article.destroy({id: id}).then((val) =>{
        res.json({'success': true});
    }, (err) => {
        if (process.env.NODE_ENV === 'development') {
            sendError(err);
        } else{
            sendError('delete faild.');
        }
    })
}