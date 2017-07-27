/**
 * Created by satuk on 24.07.17.
 */
import {combineReducers} from "redux";
import {products} from "../reducers/products";
import {basket} from "../reducers/basket";

export default combineReducers({
  products,
  basket,
});
