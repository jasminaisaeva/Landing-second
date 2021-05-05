import React from "react";
import css from "./Blocks.module.css";

export const Blocks = ({ el, id }) => {
  return (
    <div className={css.Card}>
      <div className={css.img}>
        <img src={el.img}></img>
      </div>
      <div>
        <h1 id={el.bg ? css.h1 : " "}>{el.name}</h1>
      </div>
      <div
        className={css.block}
        style={{ backgroundColor: el.bg ? "white" : "#1F2326" }}
      >
        <div>
          <img src={el.pic1}></img>
        </div>
        <div>
          <img src={el.pic2}></img>
        </div>
        <div>
          <img src={el.pic3}></img>
        </div>
        <div className={css.blockOne}>
          <img src={el.pic4}></img>
        </div>
      </div>
    </div>
  );
};
