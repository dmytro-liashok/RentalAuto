import React, { useState } from "react";
import css from "./LoadMoreBtn.module.css";
import { addAdverts } from "../../redux/adverts/advertsOperation";
import { useDispatch } from "react-redux";

const LoadMoreBtn = () => {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(addAdverts(page));
  };

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
