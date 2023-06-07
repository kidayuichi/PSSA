const inputJSON = require("../userName.json");

exports.seed = function (knex, Promise) {
  return knex("userName")
    .del()
    .then(() => {
      return knex("userName").insert(inputJSON);
    });
};
