import React from "react";
import { useStoreContext } from "../../context";
import { Content } from "../../layouts";
import "./style.scss";

const Checkout = () => {
  const storeContext = useStoreContext();

  return <Content>Checkout: {JSON.stringify(storeContext.items)}</Content>;
};

export default Checkout;
