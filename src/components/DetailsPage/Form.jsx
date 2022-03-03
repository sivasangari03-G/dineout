import React from "react";
import styles from "./Form.module.css";
export const Form = (props) => {
  const addToCartHandler = () => {
    props.addToCartHandler("this is parameter");
  };
  return (
    <React.Fragment>
      <form className={styles.cartForm}>
        <div>form click below to add to cart</div>
        <button onClick={addToCartHandler}>CLICK HERE</button>
      </form>
    </React.Fragment>
  );
};
