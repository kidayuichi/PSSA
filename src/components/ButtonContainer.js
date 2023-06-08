import logo from "../logo.svg";
import "../styles/ButtonContainer.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
// const credentials = require("./pokemonpjt-1b41be896d90.json");

const URL = process.env.NODE_ENV
  ? "https://pssa2-front.onrender.com"
  : "http://localhost:8080";

export default function ButtonContainer(props) {
  const { text } = props;
  const [text2, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value); // 入力された値をstateに設定する
  };

  return (
    <>
      <div className="buttonContain">
        <input
          type="text"
          placeholder="読み取り結果"
          value={text}
          onChange={changeText}
        />
        <button className="picSendData">データ登録</button>
      </div>
    </>
  );
}
