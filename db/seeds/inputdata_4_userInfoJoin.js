const inputJSON = require("../userInfoJoin.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw("SET FOREIGN_KEY_CHECKS = 0;")
    .then(() => {
      return knex("userInfoJoin").del();
    })
    .then(() => {
      return knex("userInfoJoin").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw("SET FOREIGN_KEY_CHECKS = 1;");
    });
};
