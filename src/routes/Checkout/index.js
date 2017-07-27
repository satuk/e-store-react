/**
 * Created by satuk on 21.07.17.
 */
import React from "react";
import Layout from "../../components/Layout";
import {connect} from "react-redux";
import Receipt from "../../containers/Receipt";
import ShoppingBasket from "material-ui-icons/ShoppingBasket";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import {Link} from "react-router-dom";

const styles = {
  basket: {
    height: 300,
    width: 300,
  },
  button: {
    height: 400,
    width: 400,
  },
  checkout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

const Checkout = ({ basket }) => {
  if ( !basket.length ) {
    return <Layout>
      <div style={styles.checkout}>
        <Typography type="display1" style={{ padding: '30px 0', }}>your cart is empty..</Typography>
        <Link to="/">
          <Button fab color="primary" style={styles.button}>
            <ShoppingBasket style={styles.basket}/>
          </Button>
        </Link>
      </div>
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
