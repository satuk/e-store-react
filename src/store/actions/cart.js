/**
 * Created by satuk on 24.07.17.
 */
import {ADD_BASKET_ITEM, REMOVE_BASKET, REMOVE_BASKET_ITEM} from "../constants";

export const addToCart = (item) => ({
  type: ADD_BASKET_ITEM,
  item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_BASKET_ITEM,
  item,
});

export const removeAll = (item) => ({
  type: REMOVE_BASKET,
  item,
});
