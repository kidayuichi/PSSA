const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const knex = require("knex")({
  client: "pg",
  connection: process.env.DATABASE_URL || {
    host: "127.0.0.1",
    user: "user",
    password: "user",
    database: "pokemonsearch",
  },
});
const app = express();
const port = process.env.PORT || 8080;

const buildPath = path.join(__dirname, "./build");

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());

app.get("/api/poke", async (req, res) => {
  console.log("get受信");
  const AllPokemon = () => {
    return knex.select("*").from("pokemon").limit(100);
  };

  const AllPokemonObj = await AllPokemon();
  console.log("getObj完了");
  res.status(200).json(AllPokemonObj);
});

app.listen(port, () => {
  console.log(`Server is online on port: ${port}`);
});
