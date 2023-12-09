import React, { useEffect, useState } from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import useSelectors from "../../hooks/useSelectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import { clearAdverts } from "../../redux/adverts/advertsSlice";
import EmptyList from "../../components/EmptyList/EmptyList";

const Catalog = () => {
  const { adverts } = useSelectors();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(clearAdverts());
    }

    dispatch(getAdverts(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  console.log(currentPage);

  return (
    <>
      <SearchBar />
      {adverts.length > 0 ? (
        <AdvertsList adverts={adverts} handleLoadMore={handleLoadMore} />
      ) : (
        <EmptyList textEmpty="We're sorry, but we don't have any cars for the selected parameters. Please try other parameters." />
      )}
    </>
  );
};

export default Catalog;
