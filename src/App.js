import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Attack from "./components/Attack"

function App() {
  const [damage, damageSet] = useState("0");
  const [energyCost, energyCostSet] = useState("");
  const [skillType, skillTypeSet] = useState("");
  const [skillTypeNum, skillTypeNumSet] = useState("");
  const [resultNum, resultNumSet] = useState(""); //検索件数を出力

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  useEffect(() => { }, []);
  console.log(damage);
  return (
    <Router>
       <Routes>
         <Route path="/" element={
          <>
            <div className='link-container'>
              <div className='link'>
                <Link to="/">はじめての方へ</Link>
              </div>
              <div className='link'>
                <Link to="/">遊び方と<br></br>大会ルール</Link>
              </div>
              <div className='link'>
                <Link to="/">商品情報</Link>
              </div>
              <div className='link'>
                <Link to="/">イベント</Link>
              </div>
              <div className='link'>
                <Link to="/">お店検索</Link>
              </div>
              <div className='link'>
                <Link to="/">カード検索</Link>
              </div>
              <div className='link'>
                <Link to="/">デッキ構築</Link>
              </div>
              <div className='link'>
                <Link to="/AttackSearch">技検</Link>
              </div>
              <div className='link'>
                <Link to="/myCardLists">俺のカード</Link>
              </div>
              <div className='link'>
                <Link to="/login">ログイン</Link>
              </div>
            </div>
            <div className='pic'>
            <Slider {...settings}>
              <div>
                <img src={require("./img/pic1.png")} alt="Image 1" />
              </div>
              <div>
                <img src={require("./img/pic2.png")} alt="Image 2" />
              </div>
              <div>
                <img src={require("./img/pic3.png")} alt="Image 3" />
              </div>
              <div>
                <img src={require("./img/pic4.png")} alt="Image 4" />
              </div>
              <div>
                <img src={require("./img/pic5.png")} alt="Image 5" />
              </div>
            </Slider>
      </div>
      </>
     }
      />
      <Route
        path="/AttackSearch"
        element={
          <div>
            <Attack />
          </div>
        }
      />
      <Route
        path="/myCardLists"
        element={
          <div>
            <Link to="/">aaaaaaaaaaaa</Link>
          </div>
        }
      />
      <Route
        path="/login"
        element={
          <div className="login">
            <h1 className="title">!!DRAFT!!アカウント情報入力・登録画面</h1>
            <label>AccountName</label>
            <br />
 
            <Link to="/">キャンセルして戻る</Link>

            <Link to="/">登録完了してログイン画面に戻る</Link>

            <Link to="/">HOME</Link>
          </div>
        }
      />
    </Routes>
  </Router>
  );
}

export default App;
