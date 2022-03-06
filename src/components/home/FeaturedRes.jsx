import React, { useContext, useEffect, useState } from "react";
import { FeaturedResContext } from "../../contexts/FeaturedResContext";
import styles from "./featuredRes.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../dineoutPassport/carousel.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
import { CardDisplay } from "./CardDisplay";
import { useSelector } from "react-redux";
export const FeaturedRes = () => {
  // const settings = {
  // 	focusOnSelect: true,
  // 	infinite: true,
  // 	slidesToShow: 4,
  // 	slidesToScroll: 1,
  // 	speed: 500,
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  let city = useSelector((store) => store.RestaurantReducer.city);
  const [resData, setResData] = useState([]);
  console.log(city, "from home page");
  useEffect(() => {
    fetch(
      `https://fake-json-server2.herokuapp.com/products?city=${city}&featured=true`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setResData([...json]);
      })
      .catch((err) => console.log(err));
  }, [city]);

  const array = resData.splice(0, 4);
  return (
    <div className={styles.featuredResMain}>
      <h2 className={styles.featuredResTitle}>Featured Restaurants</h2>
      <div style={{ margin: "30px auto", width: "100%" }}>
        <Slider {...settings}>
          {array.map((elem) => {
            return (
              <div key={elem.id}>
                <div key={elem.id} className={styles.restaurantCartsMain}>
                  <div>
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <CardDisplay elem={elem} />
                    </div>

                    {/* <div className={styles.imgMain}>
                      <img
                        className={styles.resImg}
                        src={elem.image}
                        alt="hotel images"
                      />
                    </div>
                    <div className={styles.resAllMain}>
                      <div className={styles.nameAddressArea}>
                        <div className={styles.name}>{elem.name}</div>
                        <div className={styles.addressArea}>
                          {elem.address}, {elem.area}
                        </div>
                      </div>
                      <div className={styles.rating}>{elem.rating}</div>
                    </div> */}

                    <div
                      style={{
                        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        color: "#54BD8A",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20px",
                        marginTop: "10px",
                        paddingBottom: "20px",
                      }}
                    >
                      <LocalOfferIcon fontSize="small" />
                      <div
                        style={{
                          paddingLeft: "10px",
                          fontSize: "14px",
                        }}
                      >
                        Flat 10% Off the Total Bill
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
