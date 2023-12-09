import { useFormik } from "formik";
import React from "react";
import css from "./SearchBar.module.css";
import brands from "../../sources/makes.json";
import { useDispatch } from "react-redux";
import { getAllAdverts } from "../../redux/adverts/advertsOperation";
import { clearAdverts } from "../../redux/adverts/advertsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      minMileage: "",
      maxMileage: "",
    },

    onSubmit: (values) => {
      dispatch(clearAdverts());
      dispatch(getAllAdverts({ params: values }));
    },
  });

  const prices = Array.from({ length: 20 }, (_, index) => 30 + index * 10);

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
      <div className={css.inputPriceWpap}>
        <label htmlFor="price" className={css.label}>
          Price / 1 hour
        </label>
        <select
          id="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.carBrand}
          className={`${css.input}`}
        >
          <option value="">To $</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mileage" className={`${css.label}`}>
          Сar mileage / km
        </label>
        <div className={` ${css.mileageWrap}`}>
          <input
            id="mileage"
            name="minMileage"
            type="number"
            placeholder="From"
            onChange={formik.handleChange}
            value={formik.values.minMileage}
            className={`${css.inputMileage} ${css.inputMinMileage}`}
          />
          <input
            name="maxMileage"
            type="number"
            placeholder="To"
            onChange={formik.handleChange}
            value={formik.values.maxMileage}
            className={`${css.inputMileage}`}
          />
        </div>
      </div>
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
