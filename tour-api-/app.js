const express = require("express");
const morgan = require("morgan");

const app = express();
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");







app.use(express.json());
app.use(morgan("tiny"));


// const {
//   getAllTours,
//   getTourById,
//   createTour,
//   updateTour,
//   deleteTour,
// } = require("./controllers/tourHandlers"); 

// Middleware to parse JSON
app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);
// ROUTES

// GET /tours
// app.get("/tours", getAllTours);

// // POST /tours
// app.post("/tours", createTour);

// // GET /tours/:tourId
// app.get("/tours/:tourId", getTourById);

// // PUT /tours/:tourId
// app.put("/tours/:tourId", updateTour);

// // DELETE /tours/:tourId
// app.delete("/tours/:tourId", deleteTour);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});