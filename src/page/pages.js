import { lazy } from "react";

export const HomePage = lazy(() => import("./Home/Home"));
export const CatalogPage = lazy(() => import("./Catalog/Catalog"));
export const FavoritesPage = lazy(() => import("./Favorites/Favorites"));
