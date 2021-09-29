var jwt = require('jsonwebtoken');
var User = require("../../models/user");

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
            User.findByPk(info.id).then((val) => {
                if (val) {
                    req.userInfo = info;
                    next();
                } else {
                    next('authentication faild.');
                }
            }, (err) => {
                next('authentication faild.');
            });
        }
    });
}
