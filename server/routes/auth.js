const router = require('express').Router();

//import function from controller
const {registerUser, loginUser} = require('../controller/authController');

//REGISTER
router.post("/register", registerUser);

//LOGIN
router.get("/login", loginUser);

module.exports = router;