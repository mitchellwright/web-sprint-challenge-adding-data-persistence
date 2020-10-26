const db = require("../data/config");

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where("id", id).first();
}

module.exports = {
  find,
  findById,
};
