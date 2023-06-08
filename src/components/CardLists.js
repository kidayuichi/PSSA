import logo from "../logo.svg";
import "../styles/CardLists.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CameraComponent from "./CameraComponent";
import CardDataInput from "./CardDataInput";
import CardDataOutput from "./CardDataOutput";
import ButtonContainer from "./ButtonContainer";

export default function CardLists() {
  const [data, setData] = useState(null);
  const [text, setText] = useState(null);
  const handleData = (data) => {
    setData(data);
  };

  // setText(data.fullTextAnnotation.text);

  // const picSendData = () => {};

  return (
    <>
      <div className="HomeButton">
        <Link className="homeLink" to="/"></Link>
      </div>
      <div className="buttonContainer"></div>
      <div className="link-container2">
        <CameraComponent onData={handleData} />
      </div>
      <div className="DataSendButtonZone">
        <ButtonContainer text={text} />
      </div>
      <div className="cardDataInputZone">
        <CardDataInput />
      </div>
      <div className="cardDataOutputZone">
        <CardDataOutput />
      </div>
    </>
  );
}
