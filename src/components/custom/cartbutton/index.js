import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "../../ui";
import "./style.scss";
import { Badge } from "@mui/material";
import { useStoreContext } from "../../../context";

const CartButton = () => {
  const { items, toggleDrawer } = useStoreContext();
  return (
    <Button
      className="ec-cardbutton-main"
      variant="contained"
      color="warning"
      onClick={toggleDrawer}
    >
      <Badge
        badgeContent={items.reduce((x, y) => y.count + x, 0)}
        color="primary"
      >
        <ShoppingCart />
      </Badge>
    </Button>
  );
};

export default CartButton;
