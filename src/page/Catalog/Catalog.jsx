import React, { useEffect, useState } from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import useSelectors from "../../hooks/useSelectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const Catalog = () => {
  const { adverts, lengthAdverts } = useSelectors();
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(brand));
  }, [dispatch, brand]);

  const handleSubmit = (values) => {
    setBrand(values.brand);
  };

  return (
    <>
      <SearchBar onFilter={handleSubmit} />
      <AdvertsList adverts={adverts} />
      {lengthAdverts === 12 && <LoadMoreBtn onFilter={handleSubmit} />}
    </>
  );
};

export default Catalog;
