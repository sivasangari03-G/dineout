import React, { useContext } from "react";
import styles from "./homePageImg.module.css";
import SearchIcon from "@mui/icons-material/Search";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
export const HomePageImg = () => {
	const allPlaces = useContext(FeaturedResContext)
	// console.log("allPlaces",allPlaces);
	const data = []
	
	allPlaces.map((elem) => 
		data.push({"code":elem.name,"label":elem.image,"phone": elem.rating})
	);
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
					<Autocomplete
						id="country-select-demo"
						sx={{ width: 300 }}
						options={data}
						autoHighlight
						getOptionLabel={(option) => option.label}
						
						renderInput={(params) => (
							<TextField
							style={{border: "0"}}
								{...params}
								placeholder="Search for Restaurants, Cuisines, Location..."
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password", 
								}}
							/>
						)}
					/>
					<button className={styles.inputSearchBtn}>search</button>
				</div>
			</div>
		</div>
	);
};
