import React from "react";
import css from "./Content.module.css";
import { data } from "./data";
import { Blocks } from "./Blocks";

export const Content = () => {
  return (
    <div className={css.main}>
      {data.map((el, id) => {
        return <Blocks el={el} key={id} />;
      })}
    </div>
  );
};
