require('dotenv').config();
const User = require('../models/User');
const crypt = require('crypto-js');

//Function Update User
const updateUser = async (req, res) => {
    if ( (req.user.id === req.params.id) || req.user.isAdmin) {

        //If your request has password field, need encrypt before update
        if(req.body.password) {
            req.body.password = crypt.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();   //change and encrypt new password
        }

        //Processing update
        try {
            const updateUser = await User.findByIdAndUpdate(req.user.id, {
                $set: req.body
            },{
                new: true
            }); //set request body string
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can only update your account');
    }
}

//Function delete User
const deleteUser = async (req, res) => {
    if ( (req.user.id === req.params.id) || req.user.isAdmin) {
        //Process API
        try {
            await User.findByIdAndDelete(req.user.id);
            res.status(200).json('User has been deleted.... ');
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can only delete your account');
    }
};

//Function get information user
const getUser = async (req, res) => {
        //Process API
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
            console.log('User not exist');
        }
};

//Function get information all user
const getUsers = async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            //request api/users?new=true => find from newest to oldest with show limit 2 user
            const users = query ? await User.find().sort({_id: -1}).limit(2) : await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    } else res.status(403).json('You are not allowed to see all users');
};

//Function get stats user
const getStats = async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    try {
        //Query user
        const data = await User.aggregate([
        {   
            $project : {            //select field to query == SELECT
                month: {$month: "$createdAt"}
            }
        }, {                        //group document with condition == GROUP BY
            $group : {
                _id: "$month",
                total: {$sum: 1}
            }
        }
    ]);
    res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getStats
}