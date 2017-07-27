/**
 * Created by satuk on 21.07.17.
 */
import React from "react";
import Grid from "material-ui/Grid";
import {connect} from "react-redux";
import ProductListItem from "../../components/ProductListItem";

const ProductList = ({ addToCart, products }) => {
  return (
    <Grid container gutter={24}>
      {
        products.map((p) => (
          <Grid item lg={3} key={p.id}>
            <ProductListItem onClick={addToCart} item={p}/>
          </Grid>
        ))
      }
    </Grid>
  );
};


const mapStateToProps = (state) => ({
  products: Object.values(state.products),
});


export default connect(mapStateToProps)(ProductList);
