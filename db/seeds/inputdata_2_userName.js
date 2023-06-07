const inputJSON = require("../userName.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw("SET FOREIGN_KEY_CHECKS = 0;")
    .then(() => {
      return knex("userName").del();
    })
    .then(() => {
      return knex("userName").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw("SET FOREIGN_KEY_CHECKS = 1;");
    });
};
