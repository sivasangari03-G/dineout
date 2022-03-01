import React from "react";
import { Link } from "react-router-dom";
import styles from "./availableIn.module.css";
export const AvailableIn = () => {
	return (
		<div>
			<div className={styles.availableInHeading}>Available in</div>
			<div className={styles.availableOrangeLine}></div>
			<div className={styles.availableLinkMain}>
				<Link className={styles.availableLinkAllPlces} to="/">
					Delhi
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Mumbai
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Bangalore
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Chennai
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Hyderabad
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Pune
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Kolkata
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Ahmedabad
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Chandigarh
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Goa
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Jaipur
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Lucknow
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Indore
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Udaipur
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Agra
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Vadodara
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Nagpur
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Kochi
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Surat
				</Link>
				<Link className={styles.availableLinkAllPlces} to="/">
					Ludhiana
				</Link>
			</div>

			<section>
				<div className={styles.datttMain}>
					<div className={styles.discoverMain}>
						<div className={styles.availableInHeading2}>
							Discover
						</div>
						<div className={styles.availableOrangeLine2}></div>
						<Link className={styles.linkRes} to="/">
							Trending Restaurants
						</Link>
						<Link className={styles.linkRes} to="/">
							Super Savers
						</Link>
						<Link className={styles.linkRes} to="/">
							Dineout Pay
						</Link>
						<Link className={styles.linkRes} to="/">
							Dineout Passport
						</Link>
						<Link className={styles.linkRes} to="/">
							Contactless Dining
						</Link>
					</div>
					<div className={styles.discoverMain}>
						<div className={styles.availableInHeading2}>About</div>
						<div className={styles.availableOrangeLine2}></div>
						<Link className={styles.linkRes} to="/">
							About Us
						</Link>
						<Link className={styles.linkRes} to="/">
							Blog
						</Link>
						<Link className={styles.linkRes} to="/">
							Careers
						</Link>
						<Link className={styles.linkRes} to="/">
							Dineout for Business
						</Link>
						<Link className={styles.linkRes} to="/">
							Add Restaurant
						</Link>
						<Link className={styles.linkRes} to="/">
							Terms & conditions
						</Link>
						<Link className={styles.linkRes} to="/">
							Privacy Policy
						</Link>
					</div>
					<div className={styles.discoverMain}>
						<div className={styles.availableInHeading2}>
							Top Cuisines
						</div>
						<div className={styles.availableOrangeLine2}></div>
						<Link className={styles.linkRes} to="/">
							Chinese
						</Link>
						<Link className={styles.linkRes} to="/">
							Italian
						</Link>
						<Link className={styles.linkRes} to="/">
							South Indian
						</Link>
						<Link className={styles.linkRes} to="/">
							Mexican
						</Link>
						<Link className={styles.linkRes} to="/">
							Bengali
						</Link>
						<Link className={styles.linkRes} to="/">
							Thai
						</Link>
					</div>
					<div className={styles.discoverMain}>
						<div className={styles.availableInHeading2}>
							Top Facilities
						</div>
						<div className={styles.availableOrangeLine2}></div>
						<Link className={styles.linkRes} to="/">
							Trending Restaurants
						</Link>
						<Link className={styles.linkRes} to="/">
							Fine Dining
						</Link>
						<Link className={styles.linkRes} to="/">
							5 Star
						</Link>
						<Link className={styles.linkRes} to="/">
							Rooftop
						</Link>
					</div>
					<div className={styles.discoverMain}>
						<div className={styles.availableInHeading2}>
							Top Locations
						</div>
						<div className={styles.availableOrangeLine2}></div>
						<Link className={styles.linkRes} to="/">
							Rajouri Garden
						</Link>
						<Link className={styles.linkRes} to="/">
							Hauz Khas Village
						</Link>
						<Link className={styles.linkRes} to="/">
							DLF Cyber City
						</Link>
						<Link className={styles.linkRes} to="/">
							Connaught Place
						</Link>
						<Link className={styles.linkRes} to="/">
							Khan Market
						</Link>
						<Link className={styles.linkRes} to="/">
							Dwarka
						</Link>
					</div>
				</div>
			</section>

			<section>
				<div className={styles.footer}>
					<div>
						<img
							src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
							alt=""
						/>
					</div>
					<div>
						<Link to="/">
							Find the best Restaurants, Deals, Discounts & Offers
						</Link>
					</div>
					<div>
						<div>Contact:+91-9212340202</div>
					</div>
                    <div>
                        
                    </div>
					<div>
						<Link to="/">
							© 2017, dineout.co.in. All Rights Reserved.
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};
