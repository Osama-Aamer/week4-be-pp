
let userArray = [];
let nextId = 1;

function getAll() {
  return userArray;
}

function addOne(name, email, password, phone_number, gender, date_of_birth,membership_status) {
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
    return false;
  }

  const newUser = {
    id: nextId++,
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
  };

  userArray.push(newUser);
  return newUser;
}

function findById(id) {
  const user = userArray.find((item) => item.id == id);
  return user || false;
}

function updateOneById(id, updatedData) {
  const user = findById(id);
  if (user) {
    if (updatedData.name) user.name = updatedData.name;
    if (updatedData.email) user.email = updatedData.email;
    if (updatedData.password) user.password = updatedData.password;
    if (updatedData.phone_number) user.phone_number = updatedData.phone_number;
    if (updatedData.gender) user.gender = updatedData.gender;
    if (updatedData.date_of_birth) user.date_of_birth = updatedData.date_of_birth;
    if (updatedData.membership_status) user.membership_status = updatedData.membership_status;
    return user;
  }
  return false;
}

function deleteOneById(id) {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
    userArray = userArray.filter((u) => u.id != id);
    return userArray.length < initialLength;
  }
  return false;
}

// Test functions independently
if (require.main === module) {
  let test = addOne(
    {
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active"
}
  );

  console.log(test);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
  console.log("updateOne called:", updateOneById(1));
  console.log("findById after update:", findById(1));
  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById after delete:", findById(1));
}

const User = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;