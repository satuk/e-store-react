/**
 * Created by satuk on 27.07.17.
 */
import React from "react";
import {calcQuantityPrice} from "../../utils";

const styles = {
  span: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const ReceiptItem = ({ item }) => {
  return (
    <div style={styles.span}>
      <span style={{ fontSize: 16, }}>{item.name}</span>
      <span>{item.quantity} x {item.price}</span>
      <span>= {calcQuantityPrice(item)}</span>
    </div>
  );
};

export default ReceiptItem;
