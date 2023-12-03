import React from "react";
import useSelectors from "../../hooks/useSelectors";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import EmptyFavorite from "../../components/EmptyFavorite/EmptyFavorite";

const Favorites = () => {
  const { favorites } = useSelectors();
  return (
    <>
      {favorites.length === 0 ? (
        <EmptyFavorite />
      ) : (
        <AdvertsList adverts={favorites} />
      )}
    </>
  );
};

export default Favorites;
