import React, { useEffect } from 'react'
import { createContext } from 'react'

export const NavbarContext = createContext();

export const NavbarContextProvider = ({ children }) => {
    useEffect(() => {
		fetch("http://localhost:8000/navbarplacessearch", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				display(json[0]);
			})
			.catch((err) => console.log(err));
	});

	const places = [];
	function display(json) {
		for (const key in json) {
			places.push(key);
		}
	}
  return (
      <NavbarContext.Provider value={places}>{ children }</NavbarContext.Provider>
  )
}
