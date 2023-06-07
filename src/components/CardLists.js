import logo from "../logo.svg";
import "../styles/CardLists.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CameraComponent from "./CameraComponent";
import CardDataInput from "./CardDataInput";
import CardDataOutput from "./CardDataOutput";

export default function CardLists() {
  return (
    <>
      <div className="HomeButton">
        <Link className="homeLink" to="/"></Link>
      </div>
      <div className="buttonContainer"></div>
      <div className="link-container2">
        <CameraComponent />
      </div>
      <div className="DataSendButtonZone"></div>
      <div className="cardDataInputZone">
        <CardDataInput />
      </div>
      <div className="cardDataOutputZone">
        <CardDataOutput />
      </div>
    </>
  );
}
