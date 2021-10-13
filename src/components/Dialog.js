import React from "react";
import { useState } from "react";
import "../dialog.css";
import Loading from "../Loading";
import Chart from "./Chart";
const Dialog = (props) => {
  let [load, setLoad] = useState({
    btn1: false,
    btn2: false,
  });

  function countSeven() {
    if (!load.btn2) {
      setLoad({ ...load, btn1: true });
      setTimeout(() => {
        setLoad({ ...load, btn1: false });
      }, 7000);
    }
  }

  function showChart() {
    if (!load.btn1) setLoad({ ...load, btn2: !load.btn2 });
  }

  return (
    <div className="DialogBox">
      <div className="contentBox">
        <img src={props.src} alt="show" />
        <div className="btn">
          <button onClick={countSeven}>button 1</button>
          <button onClick={showChart}>button 2</button>
        </div>

        <button id="close" onClick={() => props.setOpen(!props.open)}>
          X
        </button>
      </div>

      {load.btn1 ? <Loading /> : null}
      {load.btn2 ? <Chart load={load} setLoad={setLoad} /> : null}
    </div>
  );
};

export default Dialog;
