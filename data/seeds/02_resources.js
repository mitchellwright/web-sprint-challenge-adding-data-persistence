exports.seed = async function (knex) {
  await knex("resources").insert([
    {
      name: "Engineering team member 1",
      description: "Caitlin",
    },
    {
      name: "Engineering team member 2",
      description: "Samuel",
    },
    {
      name: "Engineering team member 3",
      description: "Jonathan",
    },
    {
      name: "Designer",
      description: "Nick",
    },
  ]);
};
