const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const cors = require("cors");
// const knex = require('./db/knex');
const knex = require("knex")({
  client: "pg",
  connection: process.env.DATABASE_URL || {
    host: "dpg-chthqdl269vccp5m5be0-a",
    user: "user",
    password: "user",
    database: "pokemonsearch_jxkd",
  },
});
const app = express()
const port = process.env.PORT || 8080

const buildPath = path.join(__dirname, './build')

app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())

// app.use("/", express.static("public"));
app.get("/api/poke", async (req, res) => {
    // knexでオブジェクトを作る----------
    const AllPokemon = () => {
      return knex.select("*").from("pokemon").limit(100);
    };

    const AllpokemonObj = await AllPokemon();
    // console.log(AllpokemonObj);
    // knexでオブジェクトを作る(end)-----
    res.status(200).json(AllpokemonObj);
  }) 
  // app.get("/api/poke", async (req, res) => {
  //   try {
  //     const allPokemon = await knex.select("*").from("pokemon").limit(100);
  //     res.status(200).json(allPokemon);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("Error in retrieving data from database");
  //   }
  // });

 // Showing that the server is online and running and listening for changes
 app.listen(port, () => {
    console.log(`Server is online on port: ${port}`)
  })
  // gets the static files from the build folder
// app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'))
//   })