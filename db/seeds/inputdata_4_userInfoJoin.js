const inputJSON = require("../userInfoJoin.json");

exports.seed = function (knex, Promise) {
  return knex
    .raw('ALTER TABLE "userInfoJoin" DISABLE TRIGGER ALL;')
    .then(() => {
      return knex("userInfoJoin").del();
    })
    .then(() => {
      return knex("userInfoJoin").insert(inputJSON);
    })
    .finally(() => {
      return knex.raw('ALTER TABLE "userInfoJoin" ENABLE TRIGGER ALL;');
    });
};
