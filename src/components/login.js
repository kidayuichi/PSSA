import logo from "../logo.svg";
import "../styles/CardLists.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function login() {
  return (
    <>
      <div className="HomeButton">
        <Link className="homeLink" to="/"></Link>
      </div>
    </>
  );
}
