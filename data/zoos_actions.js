const db = require("../dbConfig.js");

module.exports = {
  get,
  getById
};

function get() {
  return db.select().from("zoos");
}

function getById(id) {
  return db
    .select()
    .from("zoos")
    .where("id", id);
}
