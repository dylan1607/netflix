const Movie = require("../models/Movie");
const jwt = require("jsonwebtoken");

//Create new movie
const createMovie = async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const movie = await newMovie.save();
      res.status(201).json(movie);
      console.log(`${req.body.title} has been created...`);
    } catch (error) {
      res.status(500).json(error);
      console.error("Create Movie failed");
    }
  } else {
    res.status(403).json("You are not allowed !");
  }
};

//Update Movie
const updateMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateMovie);
      console.log("Movie has been updated...");
    } catch (error) {
      res.status(500).json(error);
      console.log("Update movie failed");
    }
  } else {
    res.status(403).json("You are not allowed !");
  }
};

//Delete Movie
const deleteMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie has been deleted...");
      console.log("Movie has been deleted...");
    } catch (error) {
      res.status(500).json(error);
      console.log("Delete movie failed");
    }
  } else {
    res.status(403).json("You are not allowed !");
  }
};

//Delete All Movie
const deleteAllMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.deleteMany({});
      res.status(200).json("All Movie has been deleted...");
      console.log("All Movie has been deleted...");
    } catch (error) {
      res.status(500).json(error);
      console.log("Delete all movie failed");
    }
  } else {
    res.status(403).json("You are not allowed !");
  }
};

//Get movie by ID
const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
    console.log("Success get movie !");
  } catch (error) {
    res.status(500).json(error);
    console.log("Get Movie failed");
  }
};

//Get random movie
const getRandomMovie = async (req, res) => {
  const type = req.query.type; //query filter. api/movie/random?type=series
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
    console.log("Get random movie success");
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get all movie
const getMovies = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.find();
      res.status(200).json(movie.reverse());
      console.log("Get All movie success !");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  deleteAllMovie,
  getMovie,
  getRandomMovie,
  getMovies,
};
