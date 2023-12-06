export const applyFilters = (adverts, filters) => {
  const filteredAdverts = adverts.filter((advert) => {
    const rentalPrice = Number(advert.rentalPrice.replace("$", ""));

    const price = filters.price === "" ? true : rentalPrice <= filters.price;
    const brand = filters.brand === "" ? true : filters.brand === advert.make;
    const isMaxMileage =
      filters.maxMileage === "" ? true : filters.maxMileage > advert.mileage;
    const isMinMileage =
      filters.minMileage === "" ? true : filters.minMileage < advert.mileage;

    return brand && price & isMaxMileage && isMinMileage;
  });
  return filteredAdverts;
};
