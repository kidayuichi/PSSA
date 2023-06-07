const inputJSON = require("../userPass.json");

exports.seed = function (knex, Promise) {
  return knex("userPass")
    .del()
    .then(() => {
      return knex("userPass").insert(inputJSON);
    });
};
