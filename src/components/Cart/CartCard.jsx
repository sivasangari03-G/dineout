import React from "react";
import styles from "./CartCard.module.css";
export const CartCard = (props) => {
  console.log(props.elem);
  //console.log("heloo");
  const arrow = ">";
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div>
          <img src={props.elem.image} />
        </div>
        <div>
          <div className={styles.name}>{props.elem.name}</div>
          <div className={styles.address}>
            {props.elem.area}, {props.elem.city}
          </div>
          <div className={styles.time}>time to be taken dynamically</div>
          <div className={styles.table}>
            <div className={styles.row}>
              <div>Dinner</div>
              <div>Booking ID</div>
              <div>Selected Offer</div>
            </div>
            <div className={styles.row_}>
              <div>1</div>
              <div>DO14775623</div>
              <div>No offer</div>
            </div>
          </div>
        </div>
        <div className={styles.cancelcontainer}>
          <div className={styles.cancel}>Cancel</div>
          <div className={styles.arr}>{arrow}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
