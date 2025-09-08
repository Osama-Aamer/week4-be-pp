const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controllers/userControllers"); 


router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/", getUserById);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;