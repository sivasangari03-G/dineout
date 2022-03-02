import React from "react";
import { DropDownNavbar } from "../navbar/DropDownNavbar";
import { DineOutGif } from "./DineOutGif";
import styles from "./dineOutPassport.module.css";
import { DineOutPassportExperience } from "./DineOutPassportExperience";
import { DineOutPassportMember } from "./DineOutPassportMember";
import { DineOutPassRegister } from "./DineOutPassRegister";

import { GetToKnow } from "./GetToKnow";
export const DineOutPassport = () => {
	return (
		<div>
			<div>
				<DropDownNavbar />
			</div>

			<div className={styles.dineOutAlignMain}>
				<DineOutGif />
				<DineOutPassportMember />
				<DineOutPassportExperience />

				<DineOutPassRegister />
				<GetToKnow />
			</div>
		</div>
	);
};
