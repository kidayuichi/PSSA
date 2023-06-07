import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Damage from "./components/Damage";
import Energy from "./components/Energy";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  const [damage, damageSet] = useState("0");
  const [energyCost, energyCostSet] = useState("");
  const [skillType, skillTypeSet] = useState("");
  const [skillTypeNum, skillTypeNumSet] = useState("");
  const [resultNum, resultNumSet] = useState("");

  useEffect(() => {}, []);
  console.log(damage);
  return (
    <div className="home-page">
      <Damage damage={damage} damageSet={damageSet} />
      <Energy
        energyCost={energyCost}
        energyCostSet={energyCostSet}
        skillType={skillType}
        skillTypeSet={skillTypeSet}
        skillTypeNum={skillTypeNum}
        skillTypeNumSet={skillTypeNumSet}
      />

      <Button
        damage={damage}
        energyCost={energyCost}
        skillType={skillType}
        killTypeNum={skillTypeNum}
      />

      <Result
        resultNum={resultNum}
        resultNumSet={resultNumSet}
        // ??????
      />
    </div>
  );
}

export default App;
