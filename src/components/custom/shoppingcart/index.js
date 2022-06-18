import {
  Add,
  Close,
  Remove,
  RemoveShoppingCartOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { ButtonGroup } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useStoreContext } from "../../../context";
import { Button, Image, Modal } from "../../ui";
import "./style.scss";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  const { toggleDrawer, items, addItem, removeItem, checkout } =
    useStoreContext();

  const confirmCheckout = () => {
    checkout();
    setOpen(false);
  };

  return (
    <Fragment>
      <div className="ec-shoppingcart-main">
        <div className="ec-shoppingcart-title">Shopping Cart</div>
        <div className="ec-shoppingcart-content">
          <div className="ec-shoppingcart-content-inner">
            {!items.length ? (
              <div className="ec-shoppingcart-empty">
                <RemoveShoppingCartOutlined />
                <h3>No items</h3>
                <p>Shopping card is empty</p>
              </div>
            ) : null}
            {items.map((x, y) => (
              <div className="ec-shoppingcart-item">
                <div className="ec-shoppingcart-item-inner">
                  <div className="ec-shoppingcart-item-image">
                    <div className="ec-shoppingcart-item-image-inner">
                      <Image src={x.item.image} alt="Item" />
                    </div>
                  </div>
                  <div className="ec-shoppingcart-item-info">
                    <div className="ec-shoppingcart-item-title">
                      {x.count > 1 ? `${x.count} x ` : ""} {x.item.title}
                    </div>
                    <div className="ec-shoppingcart-item-description">
                      {x.item.description}
                    </div>
                    <div className="ec-shoppingcart-item-price">
                      <ButtonGroup
                        variant="contained"
                        className="ec-shoppingcart-item-button-group"
                      >
                        <Button onClick={() => addItem(x.item)}>
                          <Add />
                        </Button>
                        <Button onClick={() => removeItem(x.item.id)}>
                          <Remove />
                        </Button>
                      </ButtonGroup>
                      <div className="ec-shoppingcart-item-price-calculated">
                        {(x.count * x.item.price).toFixed(2)}&euro;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ec-shoppingcart-total">
          Total
          <span>
            {items.reduce((x, y) => x + y.item.price * y.count, 0).toFixed(2)}
            &euro;
          </span>
        </div>
        <div className="ec-shoppingcart-actions">
          <Button
            className="ec-mb-10"
            color="primary"
            variant="contained"
            fullWidth
            startIcon={<ShoppingCartOutlined />}
            onClick={() => setOpen(true)}
          >
            BUY NOW
          </Button>
          <Button
            color="default"
            variant="contained"
            fullWidth
            startIcon={<Close />}
            onClick={toggleDrawer}
          >
            CLOSE
          </Button>
        </div>
      </div>
      <Modal
        size="medium"
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm purchase"
        content="Would you like to continue with this purchase? Undo will not be available this time."
        actions={[
          <Button onClick={confirmCheckout}>Confirm</Button>,
          <Button onClick={() => setOpen(false)}>Cancel</Button>,
        ]}
      />
    </Fragment>
  );
};

export default ShoppingCart;
