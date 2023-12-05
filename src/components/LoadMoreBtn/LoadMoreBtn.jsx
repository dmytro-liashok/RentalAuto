import React, { useState } from "react";
import css from "./LoadMoreBtn.module.css";
import { addAdverts } from "../../redux/adverts/advertsOperation";
import { useDispatch } from "react-redux";

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
