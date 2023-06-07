const inputJSON = require("../userPass.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw("SET FOREIGN_KEY_CHECKS = 0;")
    .then(() => {
      return knex("userPass").del();
    })
    .then(() => {
      return knex("userPass").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw("SET FOREIGN_KEY_CHECKS = 1;");
    });
};
