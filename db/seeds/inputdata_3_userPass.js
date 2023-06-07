const inputJSON = require("../userPass.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw('ALTER TABLE "userPass" DISABLE TRIGGER ALL;')
    .then(() => {
      return knex("userPass").del();
    })
    .then(() => {
      return knex("userPass").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw('ALTER TABLE "userPass" ENABLE TRIGGER ALL;');
    });
};
