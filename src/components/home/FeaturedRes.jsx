import React, { useContext } from "react";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
import styles from "./featuredRes.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../dineoutPassport/carousel.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
export const FeaturedRes = () => {
	// const settings = {
	// 	focusOnSelect: true,
	// 	infinite: true,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	speed: 500,
	// };
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
	};
	const featuredData = useContext(FeaturedResContext);

	const data = featuredData.filter((elem) => {
		return elem.featured === true;
	});
	console.log(data);
	return (
		<div className={styles.featuredResMain}>
			<h2 className={styles.featuredResTitle}>Featured Restaurants</h2>
			<div style={{ margin: "30px auto", width: "100%" }}>
				<Slider {...settings}>
					{data.map((elem) => {
						return (
							<div key={elem.id}>
								<Link to="/" className={styles.featuredLink}>
									<div
										key={elem.id}
										className={styles.restaurantCartsMain}
									>
										<div>
											<div className={styles.imgMain}>
												<img
													className={styles.resImg}
													src={elem.image}
													alt="hotel images"
												/>
											</div>
											<div className={styles.resAllMain}>
												<div
													className={
														styles.nameAddressArea
													}
												>
													<div
														className={styles.name}
													>
														{elem.name}
													</div>
													<div
														className={
															styles.addressArea
														}
													>
														{elem.address},{" "}
														{elem.area}
													</div>
												</div>
												<div className={styles.rating}>
													{elem.rating}
												</div>
											</div>

											<div
												style={{
													borderBottom:
														"1px solid rgba(0, 0, 0, 0.05)",
													marginLeft: "20px",
													marginRight: "20px",
												}}
											></div>
											<div
												style={{
													color: "#54BD8A",
													fontWeight: "600",
													display: "flex",
													alignItems: "center",
													paddingLeft: "20px",
													marginTop: "10px",
													paddingBottom: "20px"
												}}
											>
												<LocalOfferIcon fontSize="small" />
												<div
													style={{
														paddingLeft: "10px",
														fontSize: "14px"
													}}
												>
													Flat 10% Off the Total Bill
												</div>
											</div>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};
