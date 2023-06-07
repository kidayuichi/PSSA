const inputJSON = require("../cardPossession.json");

exports.seed = function (knex, Promise) {
  return knex("cardPossession")
    .del()
    .then(() => {
      return knex("cardPossession").insert(inputJSON);
    });
};
