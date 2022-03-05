import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { BookATable } from "../components/bookATable/BookATable";
import { DineoutPay } from "../components/dineoutPay/DineoutPay";
import { SuperSaver } from "../components/superSaver/SuperSaver";
import { DineOutPassport } from "../components/dineoutPassport/DineOutPassport";
import { Details } from "../components/DetailsPage/Details";
import { Cart } from "../components/Cart/Cart";
// import ResturantHome from "../ComponentsR/Resaurants/ResturantHome";
export const NavbarRouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookatable" element={<BookATable />}></Route>
        <Route path="/dineoutpassport" element={<DineOutPassport />}></Route>
        <Route path=":dineoutpay" element={<DineoutPay />}></Route>
        <Route path="/details:name" element={<Details />}></Route>
        <Route path=":supersaver" element={<SuperSaver />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};
