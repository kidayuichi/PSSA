import logo from "../logo.svg";
import "../styles/Attack.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Damage from "./Damage"; //ダメージを記入する欄
import Energy from "./Energy"; //消費エネルギー数を指定する欄
import Button from "./Button"; //検索ボタン

const URL = process.env.DATABASE_URL
  ? "https://pssa2-front.onrender.com"
  : "http://localhost:8080";

export default function Attack() {
  const [damage, damageSet] = useState("0");
  const [energyCost, energyCostSet] = useState("");
  const [skillType, skillTypeSet] = useState("");
  const [skillTypeNum, skillTypeNumSet] = useState("");
  const [pokeData, setPokeData] = useState([]); // APIから取得したデータを格納する
  const [showTable, setShowTable] = useState(false); // テーブル表示フラグ

  const tableDel = () => {
    setShowTable(false);
  };

  const getAllPoke = async () => {
    console.log("getAllPoke");
    const pokeArray = await fetch(`${URL}/api/poke`);
    const objectData = await pokeArray.json();
    objectData.sort((a, b) => a.id - b.id);
    setPokeData(objectData);
    setShowTable(true); // テーブル表示フラグを更新
    console.log(objectData);
  };

  const tableMake = () => {
    if (!showTable) {
      return null; // テーブル非表示の場合はnullを返す
    }

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>名前</th>
              <th width="100px">カードURL</th>
              <th>技名1</th>
              <th width="30px">ダメージ</th>
              <th>エネ1</th>
              <th>エネ2</th>
              <th>エネ3</th>
              <th width="30px">エネ4</th>
              <th width="30px">エネ5</th>
              <th>技名2</th>
              <th>ダメージ</th>
              <th>エネ1</th>
              <th>エネ2</th>
              <th>エネ3</th>
              <th width="30px">エネ4</th>
              <th width="30px">エネ5</th>
            </tr>
          </thead>
          <tbody>
            {pokeData.map((rowData) => (
              <tr key={rowData.id}>
                <td>{rowData.id}</td>
                <td>{rowData.name}</td>
                <td>
                  <a
                    href={rowData.cardURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {rowData.cardURL}
                  </a>
                </td>
                <td>{rowData.Attack1name}</td>
                <td>{rowData.Attack1damage}</td>
                <td>{rowData.Attack1energy1}</td>
                <td>{rowData.Attack1energy2}</td>
                <td>{rowData.Attack1energy3}</td>
                <td>{rowData.Attack1energy4}</td>
                <td>{rowData.Attack1energy5}</td>
                <td>{rowData.Attack2name}</td>
                <td>{rowData.Attack2damage}</td>
                <td>{rowData.Attack2energy1}</td>
                <td>{rowData.Attack2energy2}</td>
                <td>{rowData.Attack2energy3}</td>
                <td>{rowData.Attack2energy4}</td>
                <td>{rowData.Attack2energy5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
  useEffect(() => {
    tableMake();
  }, [pokeData, showTable]); // pokeDataとshowTableの変更時に再レンダリング

  console.log(damage);
  return (
    <>
      <div className="HomeButton">
        <Link className="homeLink" to="/"></Link>
      </div>

      <div className="link-container">
        <div className="link">
          <Damage damage={damage} damageSet={damageSet} />
        </div>
        <div className="link">
          <Energy
            energyCost={energyCost}
            energyCostSet={energyCostSet}
            skillType={skillType}
            skillTypeSet={skillTypeSet}
            skillTypeNum={skillTypeNum}
            skillTypeNumSet={skillTypeNumSet}
          />
        </div>
        <div className="link">
          <Button getAllPoke={getAllPoke} tableDel={tableDel} />
        </div>
        <div id="table-container">{tableMake()}</div>
      </div>
    </>
  );
}
