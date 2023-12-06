import React from "react";
import css from "./EmptyList.module.css";
import PropTypes from "prop-types";

const EmptyList = ({ textEmpty }) => {
  return (
    <div className={css.emptyContainer}>
      <div className={css.emptyFavorite}>{textEmpty}</div>
    </div>
  );
};

EmptyList.propTypes = {
  textEmpty: PropTypes.string.isRequired,
};

export default EmptyList;
