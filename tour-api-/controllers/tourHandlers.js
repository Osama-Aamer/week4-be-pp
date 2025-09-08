const Tour = require("../models/tourModel");

// GET /api/tours
const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

// POST /api/tours
const createTour = (req, res) => {
  const { name, info, image, price } = req.body;
  const newTour = Tour.addOne(name, info, image, price);

  if (newTour) {
    res.status(201).json(newTour); // 
  } else {
    res.status(400).json({ message: "Invalid tour data" });
  }
};

// GET /api/tours/:tourId
const getTourById = (req, res) => {
  const tourId = req.params.tourId;
  const tour = Tour.findById(tourId);

  if (tour) res.json(tour);
  else res.status(404).json({ message: "Tour not found" });
};

// PUT /api/tours/:tourId
const updateTour = (req, res) => {
  const tourId = req.params.tourId;
  const { name, info, image, price } = req.body;

  const updatedTour = Tour.updateOneById(tourId, { name, info, image, price });

  if (updatedTour) res.json(updatedTour);
  else res.status(404).json({ message: "Tour not found" });
};

// DELETE /api/tours/:tourId
const deleteTour = (req, res) => {
  const tourId = req.params.tourId;
  const isDeleted = Tour.deleteOneById(tourId);

  if (isDeleted) res.status(204).send(); 
  else res.status(404).json({ message: "Tour not found" });
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
