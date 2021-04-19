const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');






router.get('/movies', async (req, res) => {
  
    // Get all movies from the database
    
      const moviesFromDB = await Movie.find();
  res.render('movies', { moviesFromDB });
      
  });

  router.get('/movies/:movieId', async (req, res) => {
    
        const movieId = req.params.movieId;
        const movie = await Movie.findById(req.params.movieId);
        res.render('movie-detail', { movie });
    });


  module.exports = router;