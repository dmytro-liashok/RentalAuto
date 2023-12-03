import React from "react";
import css from "./ModalDetailedDescriptionCar.module.css";
import useDescriptionAdvert from "../../hooks/useDescriptionAdvert";

const ModalDetailedDescriptionCar = ({ advert }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = advert;
  const { getCityFromAdress, getCountryFromAdress, convertingSringOnArray } =
    useDescriptionAdvert();

  const rentalConditionsArray = convertingSringOnArray(rentalConditions);

  return (
    <>
      <div className={css.imgAdvertWrap}>
        <img src={img} alt="car" className={css.imgAdvert} />
      </div>
      <div className={css.advertCarTitleWrap}>
        <p className={css.advertCarTitle}>
          {`${make} `}
          <span className={css.advertCarModel}>{model}</span>
          {`, ${year}`}
        </p>
      </div>
      <ul className={css.advertCarDescriptionList}>
        <li className={css.advertCarDescriptionItem}>
          {getCityFromAdress(address)}
        </li>
        <li className={css.advertCarDescriptionItem}>
          {getCountryFromAdress(address)}
        </li>
        <li className={css.advertCarDescriptionItem}>{`Id: ${id}`}</li>
        <li className={css.advertCarDescriptionItem}>{`Year: ${year}`}</li>
        <li className={css.advertCarDescriptionItem}>{`Type: ${type}`}</li>
        <li
          className={css.advertCarDescriptionItem}
        >{`Fuel Consumption: ${fuelConsumption}`}</li>
        <li
          className={css.advertCarDescriptionItem}
        >{`Engine Size: ${engineSize}`}</li>
      </ul>
      <p className={css.advertCarDescription}>{description}</p>

      <p className={css.advertCarAccessories}>
        Accessories and functionalities:
      </p>
      <ul className={css.advertCarAccessoriesList}>
        {accessories.map((accessorie) => (
          <li key={accessorie} className={css.advertCarAccessoriesItem}>
            {accessorie}
          </li>
        ))}
        {functionalities.map((functionalitie) => (
          <li key={functionalitie} className={css.advertCarAccessoriesItem}>
            {functionalitie}
          </li>
        ))}
      </ul>

      <p className={css.advertCarAccessories}>Rental Conditions: </p>
      <ul className={css.rentalConditionsList}>
        {rentalConditionsArray.map((rentalCondition, index) => {
          const [conditionKey, conditionValue] = rentalCondition.split(": ");
          if (conditionKey === "Minimum age") {
            return (
              <li key={index} className={css.rentalConditionsItem}>
                {conditionKey}:&nbsp;
                <span className={css.accentRentalCondition}>
                  {conditionValue}
                </span>
              </li>
            );
          } else {
            return (
              <li key={index} className={css.rentalConditionsItem}>
                {rentalCondition}
              </li>
            );
          }
        })}
        <li className={css.rentalConditionsItem}>
          Mileage:&nbsp;
          <span className={css.accentRentalCondition}>
            {mileage.toLocaleString("en-US")}
          </span>
        </li>
        <li className={css.rentalConditionsItem}>
          Price{":"}&nbsp;
          <span className={css.accentRentalCondition}>{rentalPrice}</span>
        </li>
      </ul>
      <a href="tel:+380730000000" className={css.rentalCarLink}>
        Rental car
      </a>
    </>
  );
};

export default ModalDetailedDescriptionCar;
