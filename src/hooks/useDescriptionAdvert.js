import useSelectors from "../hooks/useSelectors";

const useDescriptionAdvert = () => {
  const getCityFromAdress = (carAdress) => {
    const addressParts = carAdress.split(",");
    return addressParts[1].trim();
  };

  const getCountryFromAdress = (carAdress) => {
    const addressParts = carAdress.split(",");
    return addressParts[2].trim();
  };

  const getRandomAccessory = (accessoryArray) => {
    const randomIndex = Math.floor(Math.random() * accessoryArray.length);
    const randomAccessory = accessoryArray[randomIndex];

    const words = randomAccessory.split(" ");
    const firstThreeWords = words.slice(0, 3).join(" ");

    return firstThreeWords;
  };

  const { favorites } = useSelectors();
  const isFavorite = (advert) => {
    return favorites.some((favorite) => favorite.id === advert.id);
  };

  const convertingSringOnArray = (string) => {
    return string.split("\n");
  };

  return {
    getCityFromAdress,
    getCountryFromAdress,
    getRandomAccessory,
    isFavorite,
    convertingSringOnArray,
  };
};

export default useDescriptionAdvert;
