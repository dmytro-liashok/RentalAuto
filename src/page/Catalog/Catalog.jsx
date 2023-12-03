import React, { useEffect, useState } from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import useSelectors from "../../hooks/useSelectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { toast } from "react-toastify";
import notifyOptions from "../../utils/notifyOptions";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const { adverts, lengthAdverts } = useSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(page)).then(() => {
      handleTosifyLoadMore(lengthAdverts);
    });
  }, [dispatch, page, lengthAdverts]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleTosifyLoadMore = (lengthAdverts) => {
    if (lengthAdverts >= 12) {
      return;
    }
    if (lengthAdverts !== null) {
      toast.info("No more adverts available.", notifyOptions);
    }
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
