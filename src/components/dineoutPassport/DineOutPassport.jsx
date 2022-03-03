import React from "react";
import { DropDownNavbar } from "../navbar/DropDownNavbar";
import {DineOutPassportComponents} from "./DineOutPassportComponents"
export const DineOutPassport = () => {
	return (
		<div>
			<div>
				<DropDownNavbar />
			</div>

			<DineOutPassportComponents />
		</div>
	);
};
