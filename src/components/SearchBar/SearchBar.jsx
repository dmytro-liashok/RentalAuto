import { useFormik } from "formik";
import React from "react";
import css from "./SearchBar.module.css";
import brands from "../../sources/makes.json";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/advertsOperation";
import { clearAdverts } from "../../redux/adverts/advertsSlice";
import PropTypes from "prop-types";

const SearchBar = ({ resetPageLoadMore }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      brand: "",
    },

    onSubmit: (values) => {
      dispatch(clearAdverts());
      dispatch(getAdverts({ brand: values.brand }));
      resetPageLoadMore();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <div className={css.inputBrandWpap}>
        <label htmlFor="brand" className={css.label}>
          Car brand
        </label>
        <select
          id="brand"
          name="brand"
          onChange={formik.handleChange}
          value={formik.values.carBrand}
          className={`${css.input} ${css.inputBrand}`}
        >
          <option value="">All</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  resetPageLoadMore: PropTypes.func.isRequired,
};

export default SearchBar;
