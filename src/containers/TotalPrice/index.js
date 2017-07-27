/**
 * Created by satuk on 27.07.17.
 */
import React from "react";
import Divider from "material-ui/Divider";
import {calcTotalPrice, totalItem} from "../../utils";
import Typography from "material-ui/Typography";

const TotalPrice = ({ basket }) => {
  return (
    <div>
      <Divider/>
      <Divider/>
      <div style={{ paddingTop: 25, }}>
        <Typography type="title">
          Total Price: {calcTotalPrice(basket)}
        </Typography>
        <Typography type="subheading">
          ({totalItem(basket)}) Article
        </Typography>
      </div>
    </div>
  );
};

export default TotalPrice;
