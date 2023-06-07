/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("userInfoJoin", function (table) {
    table.increments("id").primary(); // Set this column as the primary key
    table.integer("userID");
    table.integer("userPassID");
    table.foreign("userID").references("id").inTable("userName");
    table.foreign("userPassID").references("id").inTable("userName");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("userInfoJoin");
};
