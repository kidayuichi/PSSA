import React, { useEffect } from "react";
import "../styles/button.css";

export default function Button(props) {
  const { getAllPoke, tableDel } = props;

  useEffect(() => {}, []);

  return (
    <>
      <div className="link-containerButton">
        <div className="linkButton">
          <button className="search" id="search" onClick={getAllPoke}>
            検索
          </button>
        </div>
        <div className="linkButton">
          <button className="reset" id="reset" onClick={tableDel}>
            リセット
          </button>
        </div>
      </div>
    </>
  );
}
