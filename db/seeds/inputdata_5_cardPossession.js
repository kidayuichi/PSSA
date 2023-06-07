const inputJSON = require("../cardPossession.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw('ALTER TABLE "cardPossession" DISABLE TRIGGER ALL;')
    .then(() => {
      return knex("cardPossession").del();
    })
    .then(() => {
      return knex("cardPossession").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw('ALTER TABLE "cardPossession" ENABLE TRIGGER ALL;');
    });
};
