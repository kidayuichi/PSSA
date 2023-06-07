import logo from "../logo.svg";
import "../styles/CardDataOutput.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

const URL = process.env.DATABASE_URL
  ? "https://pssa2-front.onrender.com"
  : "http://localhost:8080";

export default function CardDataOutput() {
  const [items, setItems] = useState([]);
  const [elementsArr, setElementsArr] = useState([]);
  const [ID, setID] = useState(2);

  const getMyCard = async () => {
    try {
      const response = await fetch(`${URL}/myCard/?id=${ID}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch card data.");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    itemView();
    setID(ID);
  }, [items]);

  const itemView = () => {
    const elements = items.map((item, index) => (
      <tr className="headline" key={index}>
        <td className="cardNum1">{item.possessionCardID}</td>
        <td className="itemName">{item.cardNum}</td>
      </tr>
    ));
    setElementsArr(elements);
  };

  return (
    <>
      <button className="getMyCard" onClick={getMyCard}>
        手持ちカード表示
      </button>
      <table className="myCardTable">
        <tbody>
          <tr className="headline">
            <th className="cardID">ID</th>
            <th className="cardNum">枚数</th>
          </tr>
          {elementsArr}
        </tbody>
      </table>
    </>
  );
}
