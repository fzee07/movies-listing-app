const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:id/favorites", userController.getUserFavorites);

// For Future Use
// router.post("/", userController.addUser);

module.exports = router;
