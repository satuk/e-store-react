/**
 * Created by satuk on 24.07.17.
 */
import {ADD_BASKET_ITEM, REMOVE_BASKET, REMOVE_BASKET_ITEM} from "../constants";

export const basket = (state = {}, action) => {
  switch ( action.type ) {
    case ADD_BASKET_ITEM:
      const newItem = action.item;

      if ( state[newItem.id] ) {
        newItem.quantity++;
      } else {
        newItem.quantity = 1;
      }
      return Object.assign({}, state, { [newItem.id]: newItem });

    case REMOVE_BASKET_ITEM:
      const { item } = action;
      const newState = { ...state };

      if ( item.quantity > 1 ) {
        item.quantity--;
      } else {
        Object.values(newState).filter(it => it.quantity !== 1);
        return Object.assign({});
      }

      return Object.assign({}, state, { [item.id]: item });

    case REMOVE_BASKET:
      const newRemovedBasket = {};
      const removeItem = action.item;

      Object.keys(state).forEach(obj => {
        if ( state[obj] !== removeItem ) {
          newRemovedBasket[obj] = state[obj];
        }
      });
      return Object.assign({}, newRemovedBasket);

    default:
      return state;
  }
};
