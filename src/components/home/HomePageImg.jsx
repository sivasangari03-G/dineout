import React, { useContext } from "react";
import styles from "./homePageImg.module.css";
import SearchIcon from "@mui/icons-material/Search";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
import CountrySelect from "./CountrySelect";
export const HomePageImg = () => {
  const allPlaces = useContext(FeaturedResContext);
  // console.log("allPlaces",allPlaces);
  const data = [];

  allPlaces.map((elem) =>
    data.push({ code: elem.name, label: elem.image, phone: elem.rating })
  );
  return (
    <div>
      <div>
        <div className={styles.homeDineoutImg}></div>

        <h1 className={styles.homeDineoutImgText}>
          It's Now Safe To <span style={{ color: "#FF645A" }}>Crave!</span>
        </h1>

        <div className={styles.flexx}>
          <div className={styles.ccs}>
            <CountrySelect />
            <button className={styles.inputSearchBtn}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
