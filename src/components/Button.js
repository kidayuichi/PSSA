import React from "react";
import "../styles/button.css";

const URL = process.env.DATABASE_URL ? process.env.DATABASE_URL:"http://localhost:8080"

export default function Button(props) {
  const getAllPoke = async () => {
    let result = [];
    console.log("ボタン押されたよ");
    const pokeArray = await fetch(`${URL}/api/poke`);
    result = await pokeArray.json();
    console.log(result);

    return result;
  };
  console.log(getAllPoke);

  return (
    <>
      <div>
        <button className="search" id="search" onClick={getAllPoke}>
          検索
        </button>
        <button className="reset" id="reset">
          リセット
        </button>
      </div>
    </>
  );
}
