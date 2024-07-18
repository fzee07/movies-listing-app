const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const isAdmin = require("../middleware/authMiddleware");

// Movies routes
router.get("/movies", isAdmin, adminController.listMovies);
router.post("/movies", isAdmin, adminController.addMovie);
router.delete("/movies/:id", isAdmin, adminController.deleteMovie);

// Comments routes
router.get("/comments", isAdmin, adminController.listComments);
router.delete("/comments/:id", isAdmin, adminController.deleteComment);

module.exports = router;
