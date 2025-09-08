const express = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controllers/userControllers");
const auth = require('../middleware/auth');


const router = express.Router();

router.get("/", getAllUsers);
router.use(auth);
router.post("/", createUser);
router.get("/:userId", getUserById);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
