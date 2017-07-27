/**
 * Created by satuk on 24.07.17.
 */
import React from "react";
import {connect} from "react-redux";
import {addToCart} from "../../store/actions/cart";
import AddShoppingCart from "material-ui-icons/AddShoppingCart";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import Card, {CardActions, CardContent, CardMedia} from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Avatar from "material-ui/Avatar";

const styleSheet = createStyleSheet('ProductListItem', {
  card: {
    maxWidth: 345,
  },
  addIcon: {
    height: 25,
    width: 25,
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    height: 125,
  },
  cardMedia: {
    maxHeight: 153,
    maxWidth: 153,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 16,
  },
  muiCardContent: {
    textAlign: 'center',
  },
  muiCardAction: {
    height: 75,
    justifyContent: 'center',
    backgroundColor: 'lightsteelblue',
  },
  muiAvatar: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
  }
});

const ProductListItem = ({ item, addToCart, classes }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          {item.discount ? <Avatar className={classes.muiAvatar}>%</Avatar> : ''}
          <img className={classes.img} src={item.img} alt={item.name}/>
        </CardMedia>
        <CardContent className={classes.muiCardContent}>
          <Typography type="title">
            {item.name}
          </Typography>
        </CardContent>
        <CardActions className={classes.muiCardAction}>
          <Button fab color="accent" className={classes.button} onClick={addToCart}>
            <AddShoppingCart className={classes.addIcon}/>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  addToCart: () => dispatch(addToCart(props.item)),
});

ProductListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(undefined, mapDispatchToProps)(withStyles(styleSheet)(ProductListItem));
