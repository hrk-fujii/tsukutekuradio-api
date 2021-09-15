var Article = require('../../models').Article;
var sendError = require('../../utils/sendError');

// get article by id
module.exports = (req, res) => {
    const id = req.params.id;
    Article.findByPk(id).then((val) =>{
        res.json({'success': true, 'article': val});
    }, (err) => {
        if (process.env.NODE_ENV === 'development') {
            sendError(err);
        } else{
            sendError('get article by id faild.');
        }
    })
}