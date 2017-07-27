/**
 * Created by satuk on 27.07.17.
 */
export const calcTotalPrice = (basket) => {
  const total =  basket.reduce((acc, item) => {
    if ( item.discount ) {
      const itemsToBeCharged = item.quantity - Math.floor(item.quantity / item.discount.amount);
      return acc + (item.price * itemsToBeCharged);
    }
    else return acc + (item.quantity * item.price);
  }, 0);

  return total.toFixed(2);
};

export const calcQuantityPrice = item => {
  return (item.quantity * item.price).toFixed(2);
};

export const totalItem = basket => {
  return basket.reduce((acc, item) => acc + item.quantity, 0);
};
