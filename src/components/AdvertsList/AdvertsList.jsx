import React from "react";
import css from "./AdvertsList.module.css";
import { nanoid } from "nanoid";

import AdvertsItem from "../AdvertsItem/AdvertsItem";

const AdvertsList = ({ adverts }) => {

  return (
    <>
      <ul className={css.advertsList}>
        {adverts.map((advert) => (
          <AdvertsItem advert={advert} key={nanoid()} />
        ))}
      </ul>
    </>
  );
};

export default AdvertsList;
