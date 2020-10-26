exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "Admissions Dashboard",
      description:
        "A dashboard for applicants to see their current status and next steps.",
    },
    {
      name: "New Application",
      description:
        "A new design of the application to let people move through the application part way before creating an account.",
    },
  ]);
};
