/**
 * Created by satuk on 21.07.17.
 */
import React, {Component} from "react";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import Paper from "material-ui/Paper";
import BasketItem from '../../components/BasketItem';

const styleSheet = createStyleSheet('Basket', theme => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
}));

class Basket extends Component {
  render() {
    if ( !this.props.basket.length ) {
      return <div>the basket is empty. add a product from the lift side :) </div>
    }

    const {basket, classes} = this.props;

    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell numeric>Quantity</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.map(item => {
              return (
                <BasketItem key={item.id} item={item} />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  basket: Object.values(state.basket),
});

Basket.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styleSheet)(Basket));
