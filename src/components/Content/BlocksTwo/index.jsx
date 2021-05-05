import React from "react";
import { data } from "./data";
import css from "./BlocksTwo.module.css";
import pic4 from "../../../images/stroke .png";

export const BlockTwo = () => {
  return (
    <div className={css.Main}>
      {data.map((el, id) => {
        return (
          <div>
            <div
              className={css.Blocks}
              key={id}
              style={{ backgroundImage: `url(${el.bg})` }}
            >
              <span className={css.title}>{el.title}</span>

              <div className={css.title1}>
                <b>{el.title1}</b>
              </div>
              <div className={css.title2}>{el.title2}</div>
            </div>
          </div>
        );
      })}
      <span>
        <img src={pic4}></img>
      </span>
    </div>
  );
};
