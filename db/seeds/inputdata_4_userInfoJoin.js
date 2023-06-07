const inputJSON = require("../userInfoJoin.json");

exports.seed = function (knex, Promise) {
  return knex("userInfoJoin")
    .del()
    .then(() => {
      return knex("userInfoJoin").insert(inputJSON);
    });
};
