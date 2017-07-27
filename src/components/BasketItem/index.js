/**
 * Created by satuk on 21.07.17.
 */
import React from "react";
import {connect} from "react-redux";
import {addToCart, removeAll, removeFromCart} from "../../store/actions/cart";
import {TableCell, TableRow} from "material-ui/Table";
import {IconButton} from "material-ui";
import {AddCircle, Delete as DeleteIcon, RemoveCircle} from "material-ui-icons";

const BasketItem = ({ item, addToBasket, removeFromBasket, removeAll }) => {
  return (
    <TableRow>
      <TableCell>
        {item.name}
      </TableCell>
      <TableCell numeric>
        <IconButton color="accent" onClick={addToBasket}>
          <AddCircle/>
        </IconButton>
        {item.quantity}
        <IconButton color="accent" onClick={removeFromBasket}>
          <RemoveCircle/>
        </IconButton>
      </TableCell>
      <TableCell numeric>
        {(item.price * item.quantity).toFixed(2)}
      </TableCell>
      <TableCell>
        <IconButton color="accent" aria-label="Delete" onClick={removeAll}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  addToBasket: () => dispatch(addToCart(props.item)),
  removeFromBasket: () => dispatch(removeFromCart(props.item)),
  removeAll: () => dispatch(removeAll(props.item)),
});

export default connect(undefined, mapDispatchToProps)(BasketItem);
