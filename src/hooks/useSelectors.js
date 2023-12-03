import { useSelector } from "react-redux";
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectLengthAdverts,
} from "../redux/adverts/advertsSelectors";
import { selectFavorites } from "../redux/favorites/favoritesSelectors";

const useSelectors = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const lengthAdverts = useSelector(selectLengthAdverts);

  const favorites = useSelector(selectFavorites);

  return {
    adverts,
    isLoading,
    error,
    favorites,
    lengthAdverts,
  };
};

export default useSelectors;
