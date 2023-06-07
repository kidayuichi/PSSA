/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cardPossession", function (table) {
    table.increments("id").primary(); // Set this column as the primary key
    table.integer("userNameID");
    table.string("possessionCardID", 32);
    table.integer("cardNum");
    table.foreign("userNameID").references("id").inTable("userName");
    table.foreign("possessionCardID").references("cardID2").inTable("poke");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cardPossession");
};
