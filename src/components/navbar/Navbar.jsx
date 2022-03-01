import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { NavbarContext } from "../../contexts/NavbarContext";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { LogInNavbar } from "./LogInNavbar";

export const Navbar = () => {
	const places = useContext(NavbarContext);
	return (
		<div className={styles.navbarMain}>
			<div>
				<img
					src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
					alt="dineoutlogo"
				/>
			</div>
			<div>
				<Autocomplete
					disablePortal
					id="combo-box-demo"
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
			<div>
				<Link className={styles.anchorNavbar} to="/">Home</Link>
			</div>
			<div>
				<Link className={styles.anchorNavbar} to="/bookatable">Book a Table</Link>
			</div>
			<div>
				<Link className={styles.anchorNavbar} to="/dineoutpay">Dineout Pay</Link>
			</div>
			<div>
				<Link className={styles.anchorNavbar} to="/dineoutpassport">Dineout Passport</Link>
			</div>
			<div>
				<Link className={styles.anchorNavbar} to="/events">Events</Link>
			</div>
			<div>
				<Link className={styles.anchorNavbar} to="/supersaver">Super Saver</Link>
			</div>
			<div>
				<Link className={styles.anchorNavbar} to="/blog">Blog</Link>
			</div>
			{/* <button className={styles.navbarLoginButton}>Login</button> */}
			<LogInNavbar />
		</div>
	);
};
