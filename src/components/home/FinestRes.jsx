import React, { useContext } from "react";
import styles from "./finestRes.module.css";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
import { Link } from "react-router-dom";

export const FinestRes = () => {
	const finestRestaurants = useContext(FeaturedResContext);
	// console.log("finestRestaurants", finestRestaurants);
	const data = finestRestaurants.filter((elem) => {
		return elem.pureveg === true;
	});
	// console.log(data);
	const array = [];
	data.map((elem) => (elem.id <= 7 ? array.push(elem) : 0));

	// console.log(array);
	return (
		<Link to="/dineoutpassport">
			<div className={styles.finestRoot}>
				<div>
					<img
						className={styles.registerImg}
						src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/9/artboard.png?tr=tr:n-large"
						alt="img1"
					/>
				</div>
				<div className={styles.finestImageAlignMain}>
					{array.map((elem) => {
						return (
							<div key={elem.id}>
								<Link className={styles.finestLinkDec} to="/">
									<div className={styles.forHover}>
										<div className={styles.imgMain}>
											<img
												className={styles.elemImg}
												src={elem.image}
												alt=""
											/>
										</div>
										<div className={styles.resAllMain}>
											<div
												className={
													styles.nameAddressArea
												}
											>
												<div className={styles.name}>
													{elem.name}
												</div>
												<div
													className={
														styles.addressArea
													}
												>
													{elem.address}, {elem.area}
												</div>
											</div>
											<div className={styles.rating}>
												{elem.rating}
											</div>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</Link>
	);
};
