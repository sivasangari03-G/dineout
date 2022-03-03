import React from 'react'
import { DineOutGif } from "./DineOutGif";
import styles from "./dineOutPassport.module.css";
import { DineOutPassportExperience } from "./DineOutPassportExperience";
import { DineOutPassportMember } from "./DineOutPassportMember";
import { DineOutPassRegister } from "./DineOutPassRegister";

import { GetToKnow } from "./GetToKnow";
import { PassportHowToUse } from './PassportHowToUse';

export const DineOutPassportComponents = () => {
  return (
		<div>
			<div className={styles.dineOutAlignMain}>
				<DineOutGif />
				<DineOutPassportMember />
				<DineOutPassportExperience />

              <DineOutPassRegister />
              <PassportHowToUse />
				<GetToKnow />
			</div>
		</div>
  );
}
