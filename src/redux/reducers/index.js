import { combineReducers } from "redux";
import { productReduser, selectedProductReduser } from "./productReducer";
export const reducers = combineReducers({
  allProducts :productReduser,
  product: selectedProductReduser
})