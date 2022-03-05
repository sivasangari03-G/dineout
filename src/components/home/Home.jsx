import React, { useContext, useState } from "react";
import { RestaurantNeatYouContext } from "../../contexts/RestaurantNeatYouContext";
import { BestOffers } from "./BestOffers";
import { HomePageImg } from "./HomePageImg";
import { RestaurantNearYou } from "./RestaurantNearYou";
import { Navbar } from "../navbar/Navbar";
import { AvailableIn } from "./AvailableIn";
import { EightFacility } from "./EightFacility";
import { FeaturedRes } from "./FeaturedRes";
import { DropDownNavbar } from "../navbar/DropDownNavbar";

export const Home = () => {
  const resData = useContext(RestaurantNeatYouContext);

  return (
    <div>
      <Navbar />
      {/* <DropDownNavbar /> */}
      <HomePageImg />
      <BestOffers />
      {resData && <RestaurantNearYou />}
      <FeaturedRes />
      <EightFacility />
      <AvailableIn />
    </div>
  );
};
