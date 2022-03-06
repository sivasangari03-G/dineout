import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { NavbarContext } from "../../contexts/NavbarContext";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { LogInNavbar } from "./LogInNavbar";
import { useDispatch, useSelector } from "react-redux";
import { set_city } from "../../Redux/Restaurants/actions";

export const Navbar = () => {
  const places = useContext(NavbarContext);
  // const [navbarCity, setNavbarCity] = useState(null);
  const navbarCity = useSelector((store) => store.RestaurantReducer.city);
  console.log(navbarCity);
  // useEffect(() => {
  // 	localStorage.setItem("navbarCity", navbarCity);
  // }, [navbarCity]);

  const dispatch = useDispatch();
  return (
    <React.Fragment>
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
            onChange={(event, value) => dispatch(set_city(value))}
            id="combo-box-demo"
            options={places}
            sx={{
              width: 220,
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Location" size="small" />
            )}
          />
        </div>
        <div>
          <Link className={styles.anchorNavbar} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className={styles.anchorNavbar} to="/bookatable">
            Book a Table
          </Link>
        </div>
        <div>
          <Link className={styles.anchorNavbar} to="/dineoutpay">
            Dineout Pay
          </Link>
        </div>
        <div>
          <Link className={styles.anchorNavbar} to="/dineoutpassport">
            Dineout Passport
          </Link>
        </div>
        <div>
          <Link className={styles.anchorNavbar} to="/supersaver">
            Super Saver
          </Link>
        </div>
        <LogInNavbar />
      </div>
    </React.Fragment>
  );
};
