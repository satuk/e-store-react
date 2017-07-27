/**
 * Created by satuk on 21.07.17.
 */
import React, {Component} from "react";
import Layout from "../../components/Layout";
import ProductList from "../../containers/ProductList";
import Basket from "../../containers/Basket";

const styles = {
  page: {
    display: 'flex',
  },
  split: {
    flex: 1,
    padding: 15,
  },
};

class Home extends Component {
  render() {
    return (
      <Layout>
        <div style={styles.page}>
          <div style={styles.split}>
            <ProductList />
          </div>
          <div style={styles.split}>
            <Basket style={styles.split}/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
