import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={css.nav}>
      <NavLink
        to={"/"}
        className={`${css.navLink} ${
          location.pathname === "/" && css.navActive
        }`}
      >
        Home
      </NavLink>
      <NavLink
        to={"/catalog"}
        className={`${css.navLink} ${
          location.pathname === "/catalog" && css.navActive
        }`}
      >
        Catalog
      </NavLink>
      <NavLink
        to={"/favorites"}
        className={`${css.navLink} ${
          location.pathname === "/favorites" && css.navActive
        }`}
      >
        Favorite
      </NavLink>
    </nav>
  );
};

export default Navigation;
