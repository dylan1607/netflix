const router = require('express').Router();
const verify = require('../verifyToken');
//import function from controller
const {updateUser, deleteUser, getUser, getUsers, getStats} = require('../controller/userController');

//UPDATE - need verify before call api
router.put('/:id', verify, updateUser);

//DELETE - need verify before call api
router.delete('/:id', verify, deleteUser);

//GET - don't need verify
router.get('/find/:id', getUser);

//GET ALL - Only for Admin user
router.get('/', verify, getUsers);

//GET USER STATS -- Summary, Report, Filter, Query document
router.get('/stats', getStats);

module.exports = router; 