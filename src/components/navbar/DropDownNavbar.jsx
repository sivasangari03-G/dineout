import React, { useContext, useEffect, useState } from "react";
import { NavbarContext } from "../../contexts/NavbarContext";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styles from "./dropDownNavbar.module.css";
import { LogInNavbar } from "./LogInNavbar";

import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

export const DropDownNavbar = () => {
	const places = useContext(NavbarContext);
		const [navbarCity, setNavbarCity] = useState(null);

		console.log(navbarCity);
		useEffect(() => {
			localStorage.setItem("navbarCity", navbarCity);
		}, [navbarCity]);

	return (
		<div className={styles.dropDownTop}>
			<div className={styles.dropDownMain}>
				<div>
					<img
						className={styles.dropDownImgLogo}
						src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
						alt="dineout logo"
					/>
				</div>
				<div>
					<Autocomplete
						disablePortal
						id="combo-box-demo"
						onChange={(event, value) => setNavbarCity(value)}
						options={places}
						sx={{
							width: 220,
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								placeholder="Location"
								size="small"
							/>
						)}
					/>
				</div>

				<div className={styles.forBorder}>
					<div className={styles.dropDownSearchField}>
						<SearchIcon className={styles.dropDownsearchIcon} />
						<div>
							<input
								className={styles.dropDownInputBox}
								type="text"
								placeholder="Search for Restaurants, Cuisines, Location..."
							/>
						</div>
						<div>
							<button className={styles.dropDowninputSearchBtn}>
								search
							</button>
						</div>
					</div>
				</div>
				<div>
					<LogInNavbar />
				</div>
			</div>
			<div className={styles.shadowLine}></div>
			<div className={styles.anchorMain}>
				<div>
					<NavLink className={styles.anchorNavbar} to="/">
						Home
					</NavLink>
				</div>
				<div>
					<NavLink className={styles.anchorNavbar} to="/bookatable">
						Book a Table
					</NavLink>
				</div>
				<div>
					<NavLink className={styles.anchorNavbar} to="/dineoutpay">
						Dineout Pay
					</NavLink>
				</div>
				<div>
					<NavLink
						className={styles.anchorNavbar}
						to="/dineoutpassport"
					>
						Dineout Passport
					</NavLink>
				</div>

				<div>
					<NavLink className={styles.anchorNavbar} to="/supersaver">
						Super Saver
					</NavLink>
				</div>

			</div>
			<div className={styles.shadowLine2}></div>
		</div>
	);
};
