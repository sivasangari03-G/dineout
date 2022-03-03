import React, { useContext } from "react";
import { RestaurantNeatYouContext } from "../../contexts/RestaurantNeatYouContext";
import { BestOffers } from "./BestOffers";
import { HomePageImg } from "./HomePageImg";
import { RestaurantNearYou } from "./RestaurantNearYou";
import { Navbar } from "../navbar/Navbar";
import { AvailableIn } from "./AvailableIn";
import { EightFacility } from "./EightFacility";
import { FeaturedRes } from "./FeaturedRes";
export const Home = () => {
  const resData = useContext(RestaurantNeatYouContext);
  return (
    <div>
      <Navbar />
      <HomePageImg />
      <BestOffers />
      {resData && <RestaurantNearYou />}
      <FeaturedRes />
      <EightFacility />
      <AvailableIn />
    </div>
  );
};
