import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import styles from "./dineOutPassportMember.module.css";

export const DineOutPassportMember = () => {
	const settings = {
		focusOnSelect: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
	};
	return (
		<div className={styles.memberMain}>
			<div className={styles.memberHeading}>Member Privileges</div>
			<div className={styles.memberOffer}>offer you can't resist</div>
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
				</Slider>
			</div>
		</div>
	);
};
