const inputJSON = require("../pokeData.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw('ALTER TABLE "poke" DISABLE TRIGGER ALL;')
    .then(() => {
      return knex("poke").del();
    })
    .then(() => {
      return knex("poke").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw('ALTER TABLE "poke" ENABLE TRIGGER ALL;');
    });
};
