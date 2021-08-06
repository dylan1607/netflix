const router = require('express').Router();
const verify = require('../verifyToken');

//import Movie Controller
const { createMovie, updateMovie, deleteMovie, getMovie, getRandomMovie, getMovies } = require('../controller/movieController');

//Function create new movie -- Admin
router.post('/', verify, createMovie);

//Function update movie -- Admin
router.put('/', verify, updateMovie);

//Function delete movie -- Admin
router.delete('/', verify, deleteMovie);

//Function get movie
router.get('/find/:id', getMovie);

//Function get random movie
router.get('/random', verify, getRandomMovie);

//Function get all movie -- Admin
router.get('/', verify, getMovies);

module.exports = router;