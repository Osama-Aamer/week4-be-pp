const express = require("express");
const app = express();

const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controllers/userControllers"); 

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/", getUserById);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;