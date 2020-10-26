const db = require("../data/config");

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where("id", id).first();
}

function findProjectTasks(projectID) {
  return db("tasks as t")
    .innerJoin("projects as p", "p.id", "t.project_id")
    .where("p.id", projectID)
    .select(["t.id", "t.description", "t.notes", "t.task_completed"]);
}

module.exports = {
  find,
  findById,
  findProjectTasks,
};
