import React from "react";
import css from "./AdvertsList.module.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import AdvertsItem from "../AdvertsItem/AdvertsItem";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import useSelectors from "../../hooks/useSelectors";

const AdvertsList = ({ adverts, handleLoadMore }) => {
  const { lengthAdverts } = useSelectors();
  return (
    <>
      <ul className={css.advertsList}>
        {adverts?.map((advert) => (
          <AdvertsItem advert={advert} key={nanoid()} />
        ))}
      </ul>
      {lengthAdverts === 12 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  );
};

AdvertsList.propTypes = {
  adverts: PropTypes.array.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};

export default AdvertsList;
