import React from "react";
import css from "./AdvertsList.module.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import AdvertsItem from "../AdvertsItem/AdvertsItem";

const AdvertsList = ({ adverts }) => {
  return (
    <>
      <ul className={css.advertsList}>
        {adverts?.map((advert) => (
          <AdvertsItem advert={advert} key={nanoid()} />
        ))}
      </ul>
    </>
  );
};

AdvertsList.propTypes = {
  adverts: PropTypes.array.isRequired,
};

export default AdvertsList;
