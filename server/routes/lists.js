const router = require('express').Router();
const verify = require('../verifyToken');

//import list Controller
const {createList, deleteList, getList} = require('../controller/listController');

//Function create list
router.post('/', verify, createList);

//Function delete list
router.delete('/', verify, deleteList)

//Function get list
router.get('/', verify, getList)

module.exports = router;