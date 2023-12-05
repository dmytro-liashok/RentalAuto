import React, { useEffect, useState } from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import useSelectors from "../../hooks/useSelectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { clearAdverts } from "../../redux/adverts/advertsSlice";

const Catalog = () => {
  const { adverts, lengthAdverts } = useSelectors();
  const [brand, setBrand] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(clearAdverts());
    }

    dispatch(getAdverts(currentPage));
  }, [dispatch, currentPage]);

  const handleSubmit = (values) => {
    setBrand(values.brand);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onFilter={handleSubmit} />
      <AdvertsList adverts={adverts} />
      {lengthAdverts === 12 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  );
};

export default Catalog;
