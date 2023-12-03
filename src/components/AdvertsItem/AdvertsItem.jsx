import React, { useState } from "react";
import css from "./AdvertsItem.module.css";
import useDescriptionAdvert from "../../hooks/useDescriptionAdvert";

import ModalWindow from "../ModalWindow/ModalWindow";
import ModalDetailedDescriptionCar from "../ModalDetailedDescriptionCar/ModalDetailedDescriptionCar";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/favorites/favoritesSlice.js";

const AdvertsItem = ({ advert }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = advert;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    getCityFromAdress,
    getRandomAccessory,
    getCountryFromAdress,
    isFavorite,
  } = useDescriptionAdvert();

  const handleModalToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleAddtoFavorites = (favoritesAdvert) => {
    dispatch(addToFavorites(favoritesAdvert));
  };
  return (
    <>
      <li className={css.advertsItem}>
        <div className={css.imgAdvertWrapp}>
          <img src={img} alt="car" className={css.imgAdvert} />
          {isFavorite(advert) ? (
            <IoMdHeart
              className={`${css.iconIsFavorite} ${css.iconFavorite}`}
              onClick={() => {
                handleAddtoFavorites(advert);
              }}
            />
          ) : (
            <IoMdHeartEmpty
              className={css.iconIsFavorite}
              onClick={() => {
                handleAddtoFavorites(advert);
              }}
            />
          )}
        </div>

        <div>
          <div className={css.advertCarTitleDescription}>
            <p className={css.advertCarTitle}>
              {`${make} `}
              <span className={css.advertCarModel}>{model}</span>
              {`, ${year}`}
            </p>
            <p className={css.advertCarPrice}>{rentalPrice}</p>
          </div>
          <ul className={css.advertCarDescription}>
            <li className={css.advertCarDescriptionItem}>
              {getCityFromAdress(address)}
            </li>
            <li className={css.advertCarDescriptionItem}>
              {getCountryFromAdress(address)}
            </li>
            <li className={css.advertCarDescriptionItem}>{rentalCompany}</li>
            <li className={css.advertCarDescriptionItem}>{type}</li>
            <li className={css.advertCarDescriptionItem}>{make}</li>
            <li className={css.advertCarDescriptionItem}>{mileage}</li>
            <li className={css.advertCarDescriptionItem}>
              {getRandomAccessory(accessories)}
            </li>
          </ul>
          <button className={css.btnAdvert} onClick={handleModalToggle}>
            Learn more
          </button>
        </div>
      </li>
      {isModalOpen && (
        <ModalWindow handleModalToggle={handleModalToggle}>
          <ModalDetailedDescriptionCar advert={advert} />
        </ModalWindow>
      )}
    </>
  );
};

export default AdvertsItem;
