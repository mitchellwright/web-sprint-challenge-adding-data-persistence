exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table.boolean("project_complete").defaultTo(0);
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
  });

  await knex.schema.createTable("project_resource", (table) => {
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNull();
    table
      .integer("resource_id")
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNull();
    // make the primary key of this table a combination of two columns,
    // rather than a specific `id` column
    table.primary(["project_id", "resource_id"]);
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table.boolean("task_completed").notNull().defaultTo(0);
    table
      .integer("project_id") // should match the data type of the column it's referencing
      .references("id") // creates the foreign key
      .inTable("project")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("project_resource");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
