const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// Get Movies
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMoviesByID);

// Comments
router.post("/:id/comments", movieController.addComment);

// Favorite
router.post("/:id/favorite", movieController.markFavorite);
router.delete("/:id/favorite", movieController.unmarkFavorite);

module.exports = router;
