import React, { createContext, useEffect, useState } from 'react'

export const FeaturedResContext = createContext();

export const FeaturedResContextProvider = ({ children }) => {
    const [featuredData, setFeaturedData] = useState([]);
    // console.log(featuredData);
    useEffect(() => {
		fetch("http://localhost:8000/posts", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log("featured",json);
				setFeaturedData(json)
			})
			.catch((err) => console.log(err));
	}, []);
  return (
      <FeaturedResContext.Provider value={featuredData}>{ children }</FeaturedResContext.Provider>
  )
}
