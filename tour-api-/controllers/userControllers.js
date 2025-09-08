const User = require("../models/userModel");

// GET /tours
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

// POST /tours
const createUser = (req, res) => {
  const { name, email, password, phone_number, gender, date_of_birth,membership_status } = req.body;
  const newUser = User.addOne(name, email, password, phone_number, gender, date_of_birth,membership_status);

  if (newUser) {
    res.json(201).json(newUser);
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

// GET /tours/:tourId
const getUserById = (req, res) => {
  const userId = req.params.tourId;
  const user = User.findById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /tours/:tourId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const { name, email, password, phone_number, gender, date_of_birth,membership_status } = req.body;

  const updatedUser = User.updateOneById(userId, { name, email, password, phone_number, gender, date_of_birth,membership_status });

  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /tours/:tourId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);

  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
