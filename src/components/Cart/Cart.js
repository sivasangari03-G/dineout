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
  if (!data) navigate("/");
  const handleremove = (id_) => {
    console.log(id_);
    dispatch(cartActions.removeItem(id_));
  };
  return (
    <React.Fragment>
      <DropDownNavbar />
      {data && <CartContent cart={cart} handleremove={handleremove} />}
    </React.Fragment>
  );
};
