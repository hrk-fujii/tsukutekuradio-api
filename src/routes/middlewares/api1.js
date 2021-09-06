var jwt = require('jsonwebtoken');

// jwt auth
exports.auth = (req, res, next) => {
    res.locals.message = 'error test';
    let token = '';
    if (req.headers.autholization && req.headers.autholization.split(' ')[0] == 'Bearer'){
        token = req.headers.autholization.split(' ')[1];
    } else{
        return next('token not found.');
    }

    // verify token
    jwt.verify(token, process.env.JWT_KEY, (err, info) => {
        if (err){
            next('authentication faild.');
        } else{
            req.userInfo = info;
            next();
        }
    });
}