import React from "react";
import useSelectors from "../../hooks/useSelectors";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import EmptyFavorite from "../../components/EmptyList/EmptyList";

const Favorites = () => {
  const { favorites } = useSelectors();
  return (
    <>
      {favorites.length === 0 ? (
        <EmptyFavorite textEmpty="Your favorite ads will be displayed here" />
      ) : (
        <AdvertsList adverts={favorites} />
      )}
    </>
  );
};

export default Favorites;
