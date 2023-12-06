import React, { useEffect, useState } from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import useSelectors from "../../hooks/useSelectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import { clearAdverts } from "../../redux/adverts/advertsSlice";
import { applyFilters } from "../../utils/filtersAdverts";
import EmptyList from "../../components/EmptyList/EmptyList";

const Catalog = () => {
  const { adverts } = useSelectors();
  const [filtersValues, setFiltersValues] = useState({
    brand: "",
    maxMileage: "",
    minMileage: "",
    price: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(clearAdverts());
    }

    dispatch(getAdverts(currentPage));
  }, [dispatch, currentPage]);

  const handleSubmit = ({ brand, maxMileage, minMileage, price }) => {
    setFiltersValues((prevValues) => ({
      ...prevValues,
      brand,
      maxMileage,
      minMileage,
      price,
    }));
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const filteredAdverts = applyFilters(adverts, filtersValues);

  return (
    <>
      <SearchBar onFilter={handleSubmit} />
      {filteredAdverts.length > 0 ? (
        <AdvertsList
          adverts={filteredAdverts}
          handleLoadMore={handleLoadMore}
        />
      ) : (
        <EmptyList textEmpty="We're sorry, but we don't have any cars for the selected parameters. Please try other parameters." />
      )}
    </>
  );
};

export default Catalog;
