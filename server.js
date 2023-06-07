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
    database: "pokemon",
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
    return knex.select("*").from("poke").limit(100);
  };
  const AllPokemonObj = await AllPokemon();
  console.log("getObj完了");
  res.status(200).json(AllPokemonObj);
});

app.get("/myCard", async (req, res) => {
  console.log("get受信");
  const id = req.query.id;
  console.log(id);
  const getMyCard = (id) => {
    return knex.select("*").from("cardPossession").where("userNameID", id);
  };
  const myCard = await getMyCard(id);
  console.log("getObj完了");
  res.status(200).json(myCard);
});

app.post("/myCard", async (req, res) => {
  console.log("post受信");
  const postData = req.body;
  console.log(postData);

  const postDataInsertFunc = async () => {
    const checkData = await knex("cardPossession")
      .where("userNameID", postData.userNameID)
      .andWhere("possessionCardID", postData.possessionCardID)
      .first();

    if (!checkData) {
      await knex("cardPossession").insert({
        userNameID: postData.userNameID,
        possessionCardID: postData.possessionCardID,
        cardNum: postData.cardNum,
      });
    } else {
      const updatedCardNum =
        JSON.parse(checkData.cardNum) + JSON.parse(postData.cardNum);
      await knex("cardPossession")
        .where("userNameID", postData.userNameID)
        .andWhere("possessionCardID", postData.possessionCardID)
        .update({ cardNum: updatedCardNum });
    }
    return;
  };
  const executionPost = await postDataInsertFunc();
  console.log("sendObjInsert完了");
  res.status(200).send("Success");
});

app.patch("/myCard", async (req, res) => {
  console.log("patch受信");
  const patchData = req.body;
  console.log(patchData);
  const patchDataFunc = async () => {
    const updatedCardNum = patchData.cardNum;
    await knex("cardPossession")
      .where("userNameID", patchData.userNameID)
      .andWhere("possessionCardID", patchData.possessionCardID)
      .update({ cardNum: updatedCardNum });
    return;
  };
  const executionPatch = await patchDataFunc();
  res.sendStatus(200);
});

app.delete("/myCard", async (req, res) => {
  console.log("delete受信");
  const deleteData = req.body;
  console.log(deleteData);
  const deleteDataFunc = async () => {
    await knex("cardPossession")
      .where("possessionCardID", deleteData.possessionCardID)
      .del();
    return;
  };
  const executionDelete = await deleteDataFunc();
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is online on port: ${port}`);
});
