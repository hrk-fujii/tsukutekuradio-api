var Article = require('../../models').Article;
var sendError = require('../../utils/sendError');

// update article
module.exports = (req, res) => {
    const data = req.body;
    Article.update(
        {title: data.title, article: data.article, youtube_code: data.youtube_code, released_at: data.released_at},
        {where: {id: data.id}}
    ).then((val) =>{
        res.json({'success': true});
    }, (err) => {
        if (process.env.NODE_ENV === 'development') {
            sendError(err);
        } else{
            sendError('update faild.');
        }
    })
}