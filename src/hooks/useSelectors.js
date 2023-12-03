import { useSelector } from "react-redux";
import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from "../redux/adverts/advertsSelectors";
import { selectFavorites } from "../redux/favorites/favoritesSelectors";

const useSelectors = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const favorites = useSelector(selectFavorites);

  return {
    adverts,
    isLoading,
    error,
    favorites,
  };
};

export default useSelectors;
