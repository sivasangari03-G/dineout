import React, { useContext, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./logOut.module.css";
import { LogInContext } from "../../contexts/LogInContext";
import { useState } from "react";

export const LogOut = () => {
	const { handleLogOutBtn, data } = useContext(LogInContext);
	const [dropIssue, setDropIssue] = useState(false);

	useEffect(() => {
		console.log();
	}, [handleLogOutBtn,data]);

	const handleDropIssue = () => {
		setDropIssue(!dropIssue);
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div className={styles.myAcnt}>My Account</div>
				<div>
					<div className={styles.dropdown}>
						<span>
							<button
								className={styles.myAcntBtn}
								onClick={handleDropIssue}
							>
								<ArrowDropDownIcon />
							</button>
						</span>

						{dropIssue === true ? (
							<>
								<div
									className={styles.dropdownContent}
									style={{ visibility: "visible" }}
								>
									<button className={styles.loProfile}>
										Profile
									</button>
									<button
										className={styles.loLogOut}
										onClick={handleLogOutBtn}
									>
										Logout
									</button>
								</div>
							</>
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
