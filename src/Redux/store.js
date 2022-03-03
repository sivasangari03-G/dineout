import { combineReducers, createStore } from "redux";
import RestaurantReducer from "./Restaurants/restaurantReducer";

const rootReducer = combineReducers({
  RestaurantReducer: RestaurantReducer,
});

export const store_ = createStore(rootReducer);
