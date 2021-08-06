const List = require('../models/List');
const jwt = require('jsonwebtoken');

//Create list movie
const createList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const list = await newList.save();
            res.status(201).json(list);
            console.log(`${req.body.title} has been created...`);
        } catch (error) {
            res.status(500).json(error);
            console.error('Create List failed');
        }
    } else {
        res.status(403).json('You are not allowed !')
    }
};

//Delete list movie
const deleteList = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json('List Movie has been deleted ...');
            console.log('List movie has been deleted !');
        } catch (error) {
            res.status(500).json(error);
            console.error('Delete List failed');
        }
    } else {
        res.status(403).json('You are not allowed !')
    }
};


//Get list movie
const getList = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    {$sample: { size: 10 }},
                    {$match: { type: typeQuery, genre: genreQuery}},
                ]);
            } else {
                list = await List.aggregate([
                    {$sample: { size: 10 }},
                    {$match: { type: typeQuery}},
                ]);
            }
        } else {
            list = await List.aggregate([
                {$sample: { size: 10 }},
            ]);
        }
        res.status(201).json(list);
        console.log('Get list movie success !');
    } catch (error) {
        res.status(500).json(error);
        console.error('Get List failed');
    }
};

module.exports = {
    createList,
    deleteList,
    getList,
}