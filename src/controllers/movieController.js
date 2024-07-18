const Movie = require("../models/Movie");
const Comment = require("../models/Comment");
const User = require("../models/User");

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getMoviesByID = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    const comments = await Comment.find({ movieId: req.params.id });
    res.json({ movie, comments });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.markFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (!user.favorites.includes(req.body.movieId)) {
      user.favorites.push(req.body.movieId);
      await user.save();
      await Movie.findByIdAndUpdate(req.body.movieId, {
        $inc: { favorites: 1 },
      });
    }

    res.status(200).send({ msg: "success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.unmarkFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.favorites.includes(req.body.movieId)) {
      user.favorites.pull(req.body.movieId);
      await user.save();
      await Movie.findByIdAndUpdate(req.body.movieId, {
        $inc: { favorites: -1 },
      });
    }

    res.status(200).send({ msg: "success" });
  } catch (err) {
    res.status(500).send(err);
  }
};
