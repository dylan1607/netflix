const User = require('../models/User');
const crypto = require('crypto-js');    //Encrypt password before send to database
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {

    const encryptPassword = crypto.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    // Decrypt password
    // console.log(crypto.AES.decrypt(encryptPassword,process.env.SECRET_KEY).toString(crypto.enc.Utf8));
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:encryptPassword,
    });
    try {
        const user = await newUser.save(); //save model first and then convert json
        res.status(201).json(user);
    } catch (error) {
        console.error("Create user failed");
        // console.log(`${Object.keys(error.keyValue)[0]} exist`);
        res.status(500).json(error);
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) res.status(501).json('Wrong Email or Password');
        else {
            const bytes = crypto.AES.decrypt(user.password, process.env.SECRET_KEY);    //convert crypt password to byte
            const originalPassword = bytes.toString(crypto.enc.Utf8); //Decrypt password from byte 
            
            if (originalPassword !== req.body.password) {   // Compare decrypt password above with request password
                res.status(401).json('Wrong password!')
            } else {
                //After authorization granted , create a access token with expires 5days
                const accessToken = jwt.sign(
                    {id:user._id, isAdmin:user.isAdmin}, process.env.SECRET_KEY, {expiresIn: "5d"}
                );
                const {password, ...info} = user._doc;  // IMPORTANT: prevent to response secret fied to client using REST PARAMETER
                res.status(200).json({...info, accessToken});   //merge object json respsonse
            }
        }
    } catch (error) {
        console.error("Login user failed");
        res.status(500).json(error);
    }
}

module.exports = {registerUser, loginUser};