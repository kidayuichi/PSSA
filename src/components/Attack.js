import logo from '../logo.svg';
import '../styles/Attack.css';
import React, { useEffect, useState } from "react";
import Damage from "./Damage"; //ダメージを記入する欄
import Energy from "./Energy"; //消費エネルギー数を指定する欄
import Button from "./Button"; //検索ボタン
import Result from "./Result"; //結果表示一覧

export default function Attack() {
  const [damage, damageSet] = useState("0");
  const [energyCost, energyCostSet] = useState("");
  const [skillType, skillTypeSet] = useState("");
  const [skillTypeNum, skillTypeNumSet] = useState("");
  const [resultNum, resultNumSet] = useState(""); //検索件数を出力

  useEffect(() => { }, []);
  console.log(damage);
  return (
      <div className='link-container'>
        <div className='link'>
        <Damage damage={damage} damageSet={damageSet} />
        </div>
        <div className='link'>
        <Energy
        energyCost={energyCost}
        energyCostSet={energyCostSet}
        skillType={skillType}
        skillTypeSet={skillTypeSet}
        skillTypeNum={skillTypeNum}
        skillTypeNumSet={skillTypeNumSet}
      />
        </div>
        <div className='link'>
        <Button
        damage={damage}
        energyCost={energyCost}
        skillType={skillType}
        killTypeNum={skillTypeNum}
      />
        </div>
      <Result
        resultNum={resultNum}
        resultNumSet={resultNumSet}
      />
    </div>
  );
}

