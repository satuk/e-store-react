/**
 * Created by satuk on 21.07.17.
 */
import React from "react";
import Layout from "../../components/Layout";
import Basket from "../../containers/Basket";
import {connect} from "react-redux";

const Checkout = ({ basket }) => {
  if ( !basket.length ) {
    return <Layout>
      <div>checkout is empty...........</div>
    </Layout>
  }

  return (
    <Layout>
      <Receipt basket={basket}/>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  basket: Object.values(state.basket),
});

export default connect(mapStateToProps)(Checkout);
