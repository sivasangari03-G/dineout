import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

export const MemberShipContext = createContext();
export const MemberShipContextProvider = ({ children }) => {
    const [member,setMember] = useState([])
    useEffect(() => {
		fetch("http://localhost:8000/membership", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log("member", json);
				setMember(json);
			})
			.catch((err) => console.log(err));
	}, []);

  return (
      <MemberShipContext.Provider value={member}>{ children }</MemberShipContext.Provider>
  )
}