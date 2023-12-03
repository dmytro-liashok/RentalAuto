import React from "react";
import css from "./EmptyFavorite.module.css";

const EmptyFavorite = () => {
  return (
    <div className={css.emptyContainer}>
      <div className={css.emptyFavorite}>
        Your favorite ads will be displayed here
      </div>
    </div>
  );
};

export default EmptyFavorite;
