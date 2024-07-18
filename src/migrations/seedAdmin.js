const mongoose = require("mongoose");
const Admin = require("../models/Admin");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/moviesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed Admins
const seedAdmins = async () => {
  try {
    // Clear existing admins
    await Admin.deleteMany({});

    // Create dummy admins
    const admins = [
      { username: "admin1", password: "admin123" },
      { username: "admin2", password: "admin123" },
    ];

    // Insert dummy admins
    await Admin.insertMany(admins);

    console.log("Admins seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding admins:", err);
    mongoose.connection.close();
  }
};

seedAdmins();
