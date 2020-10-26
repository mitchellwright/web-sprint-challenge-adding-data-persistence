exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      description: "Design the dashboard",
      notes: "Nick needs to do this",
      project_id: 1,
    },
    {
      description: "Create the backend",
      project_id: 1,
    },
    {
      description: "Bug bash session",
      notes: "Invite all the stakeholders",
      project_id: 1,
    },
    {
      description: "Create prototype",
      notes: "Nick did this in Vue, but the styling can be reused",
      project_id: 2,
    },
    {
      description: "Figure out the auth service",
      notes: "We will need help from auth eng to get the endpoint working",
      project_id: 2,
    },
  ]);
};
