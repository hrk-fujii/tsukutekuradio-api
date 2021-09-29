var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require('../../models').User;
var sendError = require('../../utils/sendError');

// get user by name and password
module.exports = (req, res) => {
    const name = req.data.name;
    const password = req.data.password;

    if ((!(name)) || (!(password))) {
        return sendError(res, "data not found");
    }

    User.findOne({
        where: {
            name: this.name
        }
    }).then((val) =>{
        if (bcrypt.compareSync(password, val.password_hash)) {
            const info = {
                id: val.id,
                name: val.name,
                mail: val.mail
            }
            res.json({
                success: true,
                token: jwt.sign(info, process.env.JWT_KEY),
                info: info
            });
        } else{
            sendError(res, "password faild");
        }
    }, (err) => {
        if (process.env.NODE_ENV === 'development') {
            sendError(err);
        } else{
            sendError('get article by id faild.');
        }
    })
}
