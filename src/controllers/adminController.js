const Movie = require("../models/Movie");
const Comment = require("../models/Comment");

// List all movies
exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new movie
exports.addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }
    res.status(200).json({ msg: "Movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// List all comments
exports.listComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a comment

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }
    res.status(200).json({ msg: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};
