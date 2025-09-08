/* // The data model for pet is as follows
{
    "name": "Buddy",
    "species": "Dog",
    "age": 1,
    "color": "Brown",
    "weight": 2
  }
 */

let tourArray = [];
let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(name, info, image, price) {
  if (!name || !info || !image || !price) {
    return false;
  }

  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
  };

  tourArray.push(newTour);
  return newTour;
}

function findById(id) {
  const tour = tourArray.find((item) => item.id == id);
  return tour || false;
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    if (updatedData.name) tour.name = updatedData.name;
    if (updatedData.info) tour.info = updatedData.info;
    if (updatedData.image) tour.image = updatedData.image;
    if (updatedData.price) tour.price = updatedData.price;
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const tour = findById(id);
  if (tour) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((item) => item.id != id);
    return tourArray.length < initialLength;
  }
  return false;
}

// Test functions independently
if (require.main === module) {
  let result = addOne(
    "Best of Paris in 7 Days Tour",
    "Experience Paris at its finest!",
    "https://www.course-api.com/images/tours/tour-1.jpeg",
    "1,995"
  );
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
  console.log("updateOne called:", updateOneById(1, { price: "2,050" }));
  console.log("findById after update:", findById(1));
  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById after delete:", findById(1));
}

const Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;
