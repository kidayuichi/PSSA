import React, { useEffect, useState } from "react";
import "../styles/damage.css";
// import _ from "lodash";

export default function Damage(props) {
  useEffect(() => {
    console.log("エフェクトだよ！");
  }, [props.damage]);
  return (
    <>
    <div className='link-containerDame'>
    <div className='linkDame'>
      <label>与えたいダメージ</label>
      </div>
      <div className='linkDame'>
      <input
        type="text"
        id="taskText"
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={e => props.damageSet(e.target.value)}
      />
      </div>
      <div className='linkDame'>
      <select id="terms" name="select">
        <option value="1">等しい</option>
        <option value="2">以上</option>
        <option value="3">以下</option>
        <option value="4">より大きい</option>
        <option value="5">より小さい</option>
      </select>
      </div>
      </div>

    </>
  );
}
