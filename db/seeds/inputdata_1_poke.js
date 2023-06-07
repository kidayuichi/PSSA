const inputJSON = require("../pokeData.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw("SET FOREIGN_KEY_CHECKS = 0;")
    .then(() => {
      return knex("poke").del();
    })
    .then(() => {
      return knex("poke").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw("SET FOREIGN_KEY_CHECKS = 1;");
    });
};
