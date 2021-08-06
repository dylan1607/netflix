require('dotenv').config();
const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers.token;    //fomat header jwt: token | name access_token
    if (authHeader) {
        const token = authHeader.split(" ")[1];  //split string to take access_token
        
        //fomat verify(token, secretkey, return callback error or credential,certification)
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json('Token is not valid');
            else {
                // console.log(user);
                req.user = user;    //give a credential and sign new request for user
                next();
            }

        });
    } else {
        return res.status(401).json('You are not authenticated')
    }
}

module.exports = verify;