const inputJSON = require("../pokeData.json");

exports.seed = function (knex, Promise) {
  return knex("poke")
    .del()
    .then(() => {
      return knex("poke").insert(inputJSON);
    });
};
