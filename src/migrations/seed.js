const mongoose = require("mongoose");
const Movie = require("../models/movie");
const User = require("../models/user");

const movies = [
  {
    name: "Movie 1",
    description: "Description 1",
    runningTime: "120 min",
    thumbnail: "url1",
  },
  {
    name: "Movie 2",
    description: "Description 2",
    runningTime: "130 min",
    thumbnail: "url2",
  },
  {
    name: "Movie 3",
    description: "Description 3",
    runningTime: "110 min",
    thumbnail: "url3",
  },
];

const users = [
  { username: "user1", favorites: [] },
  { username: "user2", favorites: [] },
];

mongoose.connect("mongodb://localhost:27017/moviesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    await Movie.deleteMany({});
    await User.deleteMany({});

    await Movie.insertMany(movies);
    await User.insertMany(users);

    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
};

seedDatabase();
