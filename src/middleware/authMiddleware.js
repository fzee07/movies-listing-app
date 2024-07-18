/*
A simple middleware to check if the user is an authenticated admin. For simplicity, this example won't include actual authentication mechanisms like JWT. In a real-world scenario, we should use proper authentication and authorization methods.
 */

const Admin = require("../models/Admin");

const isAdmin = async (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const admin = await Admin.findOne({ username });

  if (!admin || admin.password !== password) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};

module.exports = isAdmin;
