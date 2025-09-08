const express = require("express");
<<<<<<< HEAD
=======
const router = express.Router();

>>>>>>> 7920c6044acea5becf7f49f510e28bd65f0b14f9
const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controllers/userControllers");
const auth = require('../middleware/auth');



router.get("/", getAllUsers);
router.use(auth);
router.post("/", createUser);
router.get("/:userId", getUserById);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
