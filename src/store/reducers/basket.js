/**
 * Created by satuk on 24.07.17.
 */
import {ADD_BASKET_ITEM, REMOVE_BASKET, REMOVE_BASKET_ITEM} from "../constants";

export const basket = (state = {}, action) => {
  switch ( action.type ) {
    case ADD_BASKET_ITEM:
      let addNewItem;

      if ( state[action.item.id] ) {
        addNewItem = { ...state[action.item.id] };
        addNewItem.quantity++;
      } else {
        addNewItem = {
          id: action.item.id,
          name: action.item.name,
          price: action.item.price,
          discount: action.item.discount,
          img: action.item.img,
          quantity: 1,
        }
      }
      return {
        ...state,
        [action.item.id]: addNewItem,
      };

    case REMOVE_BASKET_ITEM:
      let deleteItem = { ...state[action.item.id] };
      let newState = { ...state };
      let tmp = {};

      if ( deleteItem.quantity > 1 ) {
        deleteItem.quantity--;
      } else {
        newState[deleteItem.id].quantity = 0;

        Object.values(newState).forEach(i => {
          if ( i.quantity !== 0 ) {
            tmp[i.id] = i;
          }
        });
        
        return {
          ...tmp,
        };
      }

      return {
        ...newState,
        [action.item.id]: deleteItem,
      };

    case REMOVE_BASKET:
      const newRemovedBasket = {};
      const removeItem = action.item;

      Object.keys(state).forEach(obj => {
        if ( state[obj] !== removeItem ) {
          newRemovedBasket[obj] = state[obj];
        }
      });
      return {
        ...newRemovedBasket
      };

    default:
      return state;
  }
};
