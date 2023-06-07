const inputJSON = require("../cardPossession.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw("SET FOREIGN_KEY_CHECKS = 0;")
    .then(() => {
      return knex("cardPossession").del();
    })
    .then(() => {
      return knex("cardPossession").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw("SET FOREIGN_KEY_CHECKS = 1;");
    });
};
