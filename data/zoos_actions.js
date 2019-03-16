const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  addZoo,
  deleteZoo,
  updateZoo
};

function get() {
  return db("zoos");
}

function getById(id) {
  return db("zoos").where("id", id);
}

function addZoo(zoo) {
  return db("zoos").insert(zoo);
}

function deleteZoo(zoo) {
  return db("zoos")
    .where("id", zoo)
    .del();
}

function updateZoo(id, zoo) {
  return db("zoos")
    .where("id", id)
    .update("name", zoo);
}
