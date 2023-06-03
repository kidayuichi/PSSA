const environment = "development";
const config = require("../knexfile")[environment];

const knex = require("knex")(config,{
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "user",
      password: "user",
      database: "pokemonsearch",
    },
  });

  module.exports = knex;