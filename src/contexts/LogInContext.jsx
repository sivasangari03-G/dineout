import React, { createContext, useState } from "react";

export const LogInContext = createContext();

export const LogInContextProvider = ({ children }) => {

    const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return <LogInContext.Provider value={{open,handleOpen,handleClose}}>{children}</LogInContext.Provider>;
};
