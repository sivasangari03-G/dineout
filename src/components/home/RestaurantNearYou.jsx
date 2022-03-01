import React, { useContext } from "react";
import styles from "./restaurantNearYou.module.css";
import { RestaurantNeatYouContext } from "../../contexts/RestaurantNeatYouContext";
import { Link } from "react-router-dom";

export const RestaurantNearYou = () => {
	const resData = useContext(RestaurantNeatYouContext);
	const array = [];
	resData.map((elem) => (elem.id <= 4 ? array.push(elem) : 0));
	return (
		<div className={styles.restaurantNearYouMain}>
			<div className={styles.resNearTitleMain}>
				<h2 className={styles.resNearTitleText}>
					Restaurants Near You
				</h2>
				<Link className={styles.resNearLink} to="/">
					see All
				</Link>
			</div>

			<div className={styles.alignMain}>
				{array.map((elem) => (
					<div key={elem.id} className={styles.restaurantCartsMain}>
						<div>
							<div className={styles.imgMain}>
								<img
									className={styles.resImg}
									src={elem.image}
									alt="hotel images"
								/>
							</div>
							<div className={styles.resAllMain}>
								<div className={styles.nameAddressArea}>
									<div className={styles.name}>
										{elem.name}
									</div>
									<div className={styles.addressArea}>
										{elem.address}, {elem.area}
									</div>
								</div>
								<div className={styles.rating}>
									{elem.rating}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
