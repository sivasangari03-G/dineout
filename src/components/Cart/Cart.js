import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogInContext } from "../../contexts/LogInContext";
import { DropDownNavbar } from "../navbar/DropDownNavbar";
import { cartActions } from "../../store/cart-slice";
import { CartContent } from "./CartContent";
export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useContext(LogInContext);
  const login = JSON.parse(localStorage.getItem("value"));
  if (!login) navigate("/");
  const handleremove = (id_) => {
    console.log(id_);
    dispatch(cartActions.removeItem(id_));
  };
  console.log("in the cart");
  return (
    <React.Fragment>
      <DropDownNavbar />
      {login && <CartContent cart={cart} handleremove={handleremove} />}
    </React.Fragment>
  );
};
