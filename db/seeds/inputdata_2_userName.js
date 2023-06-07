const inputJSON = require("../userName.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw('ALTER TABLE "userName" DISABLE TRIGGER ALL;')
    .then(() => {
      return knex("userName").del();
    })
    .then(() => {
      return knex("userName").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw('ALTER TABLE "userName" ENABLE TRIGGER ALL;');
    });
};
