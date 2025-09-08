const User = require("../models/userModel");

// GET /api/users
const getAllUsers = (req, res) => {
  res.json(User.getAll());
};

// POST /api/users
const createUser = (req, res) => {
  const { name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;
  const newUser = User.addOne(name, email, password, phone_number, gender, date_of_birth, membership_status);

  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

// GET /api/users/:userId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);

  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};

// PUT /api/users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, req.body);

  if (updatedUser) res.json(updatedUser);
  else res.status(404).json({ message: "User not found" });
};

// DELETE /api/users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);

  if (isDeleted) res.status(204).send();
  else res.status(404).json({ message: "User not found" });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
