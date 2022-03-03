import React, { useContext } from "react";
import styles from "./restaurantNearYou.module.css";
import { RestaurantNeatYouContext } from "../../contexts/RestaurantNeatYouContext";
import { Link } from "react-router-dom";
import { CardDisplay } from "./CardDisplay";

export const RestaurantNearYou = () => {
  const resData = useContext(RestaurantNeatYouContext);
  const array = [];
  resData.map((elem) => (elem.id <= 4 ? array.push(elem) : 0));
  return (
    <div className={styles.restaurantNearYouMain}>
      <div className={styles.resNearTitleMain}>
        <h2 className={styles.resNearTitleText}>Restaurants Near You</h2>
        <Link className={styles.resNearLink} to="/">
          see All
        </Link>
      </div>
      <div className={styles.alignMain}>
        {array.map((elem) => (
          <CardDisplay key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  );
};
