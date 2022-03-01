import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { BookATable } from "../components/bookATable/BookATable";
import { DineoutPay } from "../components/dineoutPay/DineoutPay";
import { Events } from "../components/eventsFolder/Events";
import { Blog } from "../components/blog/Blog";
import { SuperSaver } from "../components/superSaver/SuperSaver";
import { DineOutPassport } from "../components/dineoutPassport/DineOutPassport";

export const NavbarRouterComponent = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/bookatable" element={<BookATable />}></Route>
				<Route
					path="/dineoutpassport"
					element={<DineOutPassport />}
				></Route>
				<Route path="/dineoutpay" element={<DineoutPay />}></Route>
				<Route path="/events" element={<Events />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/supersaver" element={<SuperSaver />}></Route>
			</Routes>
		</div>
	);
};
