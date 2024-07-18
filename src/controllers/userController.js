const User = require("../models/User");

exports.getUserFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("favorites");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
