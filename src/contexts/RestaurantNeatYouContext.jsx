import React, { createContext, useEffect, useState } from "react";

export const RestaurantNeatYouContext = createContext();

export const RestaurantNeatYouContextProvider = ({ children }) => {
	var [resData, setResData] = useState();

	useEffect(() => {
		fetch(`http://localhost:8000/posts`, {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				display(json);
			})
			.catch((err) => console.log(err));
	}, []);

	function display(json) {
		// console.log(json);
		setResData(json);
	}
	return (
		<RestaurantNeatYouContext.Provider value={resData}>
			{children}
		</RestaurantNeatYouContext.Provider>
	);
};
