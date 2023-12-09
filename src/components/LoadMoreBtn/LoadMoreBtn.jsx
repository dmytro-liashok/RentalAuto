import React from "react";
import css from "./LoadMoreBtn.module.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={css.loadMoreBtnWrap}>
      <button
        type="button"
        onClick={handleLoadMore}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  handleLoadMore: PropTypes.func,
};

export default LoadMoreBtn;
