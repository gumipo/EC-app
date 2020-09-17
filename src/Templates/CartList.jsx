import React, { useCallback } from "react";
import List from "@material-ui/core/List";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { getProductsInCart } from "../reducks/Users/selector";
import { CartListItem } from "../Component/Products";
import { GreyButton, PrimaryButton } from "../Component/UIkit/index";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    maxWidth: 512,
    widtg: "100%",
  },
});

const CartList = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const productsInCart = getProductsInCart(selector);
  const dispatch = useDispatch();

  const goToOrder = useCallback(() => {
    dispatch(push("/oeder/confirm"));
  }, []);

  const backToHome = useCallback(() => {
    dispatch(push("/"));
  }, []);

  return (
    <section className="c-section-wrapin">
      <h2 className="u-text__headline">ショッピングカート</h2>
      <List className={classes.root}>
        {productsInCart.length > 0 &&
          productsInCart.map((product) => (
            <CartListItem key={product.cartId} product={product} />
          ))}
      </List>
      <div className="module-spacer--medium" />
      <div className="p-grid__column">
        <PrimaryButton label={"レジへ進む"} onClick={goToOrder} />
        <div className="module-spacer--extra-small" />
        <GreyButton label={"ショッピングを続ける"} onClick={backToHome} />
      </div>
    </section>
  );
};
export default CartList;
