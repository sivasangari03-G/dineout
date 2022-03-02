import React from 'react'
import styles from "./DineOutPassportExperience.module.css"

export const DineOutPassportExperience = () => {
  return (
		<div>
			<div>
				<img
					className={styles.experienceLogo}
					src="https://im1.dineout.co.in/images/uploads/misc/2021/Jun/21/dp_experiences_title.png"
					alt="experienceLogo"
				/>
			</div>
			<div>
				<div className={styles.experienceCurated}>
					Curated experiences at premium restaurants.
				</div>
			</div>
		</div>
  );
}
