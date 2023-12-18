import React, { useEffect, useState } from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import useSelectors from "../../hooks/useSelectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import { clearAdverts } from "../../redux/adverts/advertsSlice";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import EmptyList from "../../components/EmptyList/EmptyList";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const { adverts, lengthAdverts, isLoading } = useSelectors();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(clearAdverts());
    }
    dispatch(getAdverts({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const resetPageLoadMore = () => {
    setCurrentPage(1);
  };

  return (
    <>
      <SearchBar resetPageLoadMore={resetPageLoadMore} />
      {!isLoading ? (
        adverts.length > 0 ? (
          <>
            <AdvertsList adverts={adverts} handleLoadMore={handleLoadMore} />
            {lengthAdverts === 12 && (
              <LoadMoreBtn handleLoadMore={handleLoadMore} />
            )}
          </>
        ) : (
          <EmptyList textEmpty="We're sorry, but we don't have any cars for the selected parameters. Please try other parameters." />
        )
      ) : (
        <Loader />
      )}
    </>
  );
};
export default Catalog;
