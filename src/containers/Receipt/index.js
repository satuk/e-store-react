/**
 * Created by satuk on 21.07.17.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import ReceiptItem from '../../components/ReceiptItem';
import Divider from 'material-ui/Divider';
import TotalPrice from '../../containers/TotalPrice';

const styleSheet = createStyleSheet('Receipt', theme => ({
  root: theme.mixins.gutters({
    padding: '20px 0',
  }),
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
}));

class Receipt extends Component {
  render() {

    const { classes, basket } = this.props;

    return (
      <div className={classes.paper}>
        <Paper className={classes.root} elevation={4}>
          <Typography type="display1">
            Receipt
          </Typography>
          <Divider />
          <Typography type="body1" component="p" style={{padding: '20px 0',}}>
            {basket.map(item => (
              <ReceiptItem item={item} key={item.id}/>
            ))}
          </Typography>
          <TotalPrice basket={basket}/>
        </Paper>
      </div>
    );
  }
}

Receipt.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Receipt);
