import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import styles from "./DineOutPassportExperience.module.css"

export const DineOutPassportExperience = () => {
	const settings = {
		focusOnSelect: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 500,
	};
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

			<div>
				<div>
					<Slider {...settings}>
						<div>
							<div className={styles.bgImg1Mem1}></div>
						</div>
						<div>
							<div className={styles.bgImg1Mem2}></div>
						</div>
						<div>
							<div className={styles.bgImg1Mem3}></div>
						</div>
						<div>
							<div className={styles.bgImg1Mem4}></div>
						</div>
						<div>
							<div className={styles.bgImg1Mem5}></div>
						</div>
						{/* <div>
							<div className={styles.bgImg1Mem6}></div>
						</div> */}
					</Slider>
				</div>
			</div>
		</div>
  );
}
