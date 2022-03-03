import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  console.log("hello");
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/cart`, {
        method: "GET",
        headers: { "content-type": "application/json;charset=UTF-8" },
      });
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(cartActions.replaceCart(...cartData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendCartData = (cart) => {
  console.log("sendCartData in function", cart);
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`http://localhost:8000/cart/1`, {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: { "content-type": "application/json;charset=UTF-8" },
      });
    };

    try {
      const res = await sendRequest();
      console.groupCollapsed(res, "response");
    } catch (error) {
      console.log(error);
    }
  };
};
