import { useEffect } from "react";
import "./App.css";
import { NavbarRouterComponent } from "./routes/NavbarRouterComponent";
import { fetchCartData, sendCartData } from "./store/cart-action";
import { useDispatch, useSelector } from "react-redux";
let initial = true;
function App() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  console.log(cart);
  useEffect(() => {
    //console.log("is data being sent?");
    //----------------------------------------------thunk----------------------------------------------
    // if (initial) {
    //   initial = false;
    //   return;
    // }
    //console.log("setting data");
    if (cart.changed) dispatch(sendCartData(cart));

    //----------------------------------------------thunk----------------------------------------------
  }, [cart, dispatch]);
  return (
    <div className="App">
      <NavbarRouterComponent />
    </div>
  );
}

export default App;
