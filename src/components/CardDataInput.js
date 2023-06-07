import logo from "../logo.svg";
import "../styles/CardDataInput.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

const URL = process.env.NODE_ENV
  ? "https://pssa2-front.onrender.com"
  : "http://localhost:8080";

export default function CardDataInput() {
  const [cardID, cardIDSet] = useState("");
  const [cardNum, setInputValue] = useState("");

  console.log("cardID入力: " + cardID);
  console.log("cardNum入力: " + cardNum);

  const sendMyCard = async () => {
    let body = { userNameID: 2, possessionCardID: cardID, cardNum: cardNum };
    console.log(body);
    console.log("sendMyCard押下");
    try {
      fetch(`${URL}/myCard`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const patchSendMyCard = async () => {
    let body = { userNameID: 2, possessionCardID: cardID, cardNum: cardNum };
    console.log(body);
    console.log("patchSendMyCard押下");
    try {
      fetch(`${URL}/myCard`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSendMyCard = async () => {
    const body = { userNameID: 2, possessionCardID: cardID };
    console.log(body);
    console.log("delSendMyCard押下");

    try {
      await fetch(`${URL}/myCard`, {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="dataInputCol">
        <div>
          <p>カードID:例 S8a-007/028 </p>
          <input
            type="text"
            placeholder="cardIDを入力"
            onChange={(e) => cardIDSet(e.target.value)}
          />
        </div>
        <div>
          <p>カード枚数:</p>
          <input
            type="text"
            placeholder="枚数を入力"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button className="sendMyCard" onClick={sendMyCard}>
          追加
        </button>
        <button className="patchSendMyCard" onClick={patchSendMyCard}>
          置換
        </button>
        <button className="deleteSendMyCard" onClick={deleteSendMyCard}>
          削除
        </button>
      </div>
    </>
  );
}
