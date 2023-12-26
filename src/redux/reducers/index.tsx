import { combineReducers } from "redux";
import productReducer from "./products";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
