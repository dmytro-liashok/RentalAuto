import React from "react";
import css from "./LoadMoreBtn.module.css";

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

export default LoadMoreBtn;
