import React from "react";
import Restaurants from "./Restaurants";
import style from "./RestaurantHome.module.css";
import SideFilter from "./SideFilter";
import { useParams } from "react-router-dom";

const ResturantHome = () => {
  let { city } = useParams();
  return (
    <div className={style.restauranthome}>
      <SideFilter />
      <Restaurants city={city} />
    </div>
  );
};

export default ResturantHome;
