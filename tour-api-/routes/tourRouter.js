const express = require("express");
const app = express();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourHandlers"); 
const auth = require('../middleware/auth');


const router = express.Router();

router.get("/", getAllTours);
router.use(auth);
router.post("/", createTour);
router.get("/", getTourById);
router.put("/", updateTour);
router.delete("/", deleteTour);

module.exports = router;