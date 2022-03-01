import React from "react";
import styles from "./homePageImg.module.css";
import SearchIcon from "@mui/icons-material/Search";
export const HomePageImg = () => {
	return (
		<div>
			<div>
				<div className={styles.homeDineoutImg}></div>

				<h1 className={styles.homeDineoutImgText}>
					It's Now Safe To{" "}
					<span style={{ color: "#FF645A" }}>Crave!</span>
				</h1>

				<div className={styles.homeDineoutImgSearchField}>
					<SearchIcon className={styles.searchIconColor} />
					<input
						style={{
							width: "1000px",
							border: "none",
							outline: "none",
							fontSize: "19px",
							fontWeight: "10",
						}}
						type="text"
						placeholder="Search for Restaurants, Cuisines, Location..."
					/>
					<button className={styles.inputSearchBtn }>search</button>
				</div>
			</div>
		</div>
	);
};
