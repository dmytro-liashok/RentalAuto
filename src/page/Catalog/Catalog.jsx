import React, { useEffect, useState } from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import useSelectors from "../../hooks/useSelectors";
import SearchBar from "../../components/SearchBar/SearchBar";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const { adverts } = useSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onFilter={handleSubmit} />
      <AdvertsList adverts={adverts} />
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};

export default Catalog;
